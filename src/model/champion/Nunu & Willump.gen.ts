import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Nunu & Willump';

export default {
  'Call of the Freljord': {
    name: 'Call of the Freljord',
    display_name: 'Call of the Freljord',
    champion: 'Nunu',
    skill: 'I',
    image: {
      full: 'NunuPassive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1000 / 700',
    ontargetcdstatic: '10',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> When <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nunu &amp; Willump" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nunu_%26_Willump/LoL" title="Nunu"><img alt="Nunu" src="/wiki/images/Nunu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nunu_%26_Willump/LoL" class="mw-redirect" title="Nunu &amp; Willump/LoL">Nunu</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Willump" title="Willump"><img alt="Willump" src="/wiki/images/WillumpSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Willump" title="Willump">Willump</a></span></span> deal damage against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structure</a></span>, they and a nearby allied champion gain <i>Call of the Freljord</i> for a few seconds, prioritizing the ally with <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>highest</b> attack speed</span></span>.',
      '<i>Call of the Freljord</i> cannot be gained from the same enemy again for some time.',
      '<span class="template_sbc"><b>Call of the Freljord:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. <b>Willump\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> additionally deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to secondary targets in a cone in front of him.',
    ],
    description: [
      {
        icon: '/wiki/images/Call of the Freljord.png',
        description:
          'Innate: When Nunu and Willump deal damage against an enemy  champion, large  monster or  structure, they and a nearby allied champion gain Call of the Freljord for 4 seconds, prioritizing the ally with  highest attack speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> When <b>Nunu</b> and <b>Willump</b> deal damage against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structure</a></span>, they and a nearby allied champion gain <i>Call of the Freljord</i> for 4 seconds, prioritizing the ally with <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>highest</b> attack speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' When Nunu and Willump deal damage against an enemy  champion, large  monster or  structure, they and a nearby allied champion gain Call of the Freljord for 4 seconds, prioritizing the ally with  highest attack speed.',
            increasedStat: 'total_ad',
            values: 4,
            units: '',
            unitsText:
              'Nunu and Willump deal damage against an enemy  champion, large  monster or  structure, they and a nearby allied champion gain Call of the Freljord for 4 seconds, prioritizing the ally with  highest attack speed.',
            pre: 'When Nunu and Willump deal damage against an enemy  champion, large  monster or  structure, they and a nearby allied champion gain Call of the Freljord for 4 seconds, prioritizing the ally with  highest attack speed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Call of the Freljord: Gain  20% bonus attack speed and  10% bonus movement speed. Willump's basic attacks additionally deal 30% AD physical damage to secondary targets in a cone in front of him.",
        descriptionHTML:
          '<span class="template_sbc"><b>Call of the Freljord:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">20% <b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>. <b>Willump\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> additionally deal <span style="color:orange; white-space:normal">30% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to secondary targets in a cone in front of him.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Call of the Freljord:',
            raw: ' Gain  20% bonus attack speed and  10% bonus movement speed',
            increasedStat: 'bonus_ad',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText: 'bonus attack speed and  10 20',
            pre: 'Gain  20% bonus attack speed and  10% bonus movement speed',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Willump's basic attacks additionally deal 30% AD physical damage to secondary targets in a cone in front of him.",
            damagetype: 'Physical',
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'AD physical damage to secondary targets in a cone in front of him.basic attacks additionally deal 30',
            pre: "Willump's basic attacks additionally deal 30% AD physical damage to secondary targets in a cone in front of him.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Nunu and Willump cannot trigger Call of the Freljord from the same enemy again for a time. Successive triggers of Call of the Freljord while it is active will extend the duration by 4 seconds.',
        descriptionHTML:
          '<b>Nunu</b> and <b>Willump</b> cannot trigger <i>Call of the Freljord</i> from the same enemy again for a time. Successive triggers of <i>Call of the Freljord</i> while it is active will extend the duration by 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Successive triggers of Call of the Freljord while it is active will extend the duration by 4 seconds.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'triggers of Call of the Freljord while it is active will extend the duration by 4 seconds.',
            pre: 'Successive triggers of Call of the Freljord while it is active will extend the duration by 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Allies',
    damagetype: 'Physical',
    spelleffects: 'periodic',
    notes:
      "* The splash damage will critically strike when the basic attack does, but will not deal any bonus damage.\n<ul><li><i>Call of the Freljord</i> range to be shared with allies is based on <b>Nunu</b> and <b>Willump's</b> location.\n<ul><li>If no ally is prioritized based on their stats, it will be given to the one closest to them.</li></ul></li>\n<li>Enemies that can trigger <i>Call of the Freljord</i> have a marker overhead.\n<ul><li>This marker isn't present on inhibitors or the nexus (because they cannot hold buffs and debuffs including the one that hosts this VFX), but they still trigger <i>Call of the Freljord</i> when attacked.</li></ul></li>\n<li><i>Call of the Freljord's</i> maximum remaining duration is 44 seconds.\n<ul><li>The buff has no cap its maximum total duration.</li></ul></li></ul>",
  },
  Consume: {
    name: 'Consume',
    display_name: 'Consume',
    champion: 'Nunu',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NunuQ.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '125',
    cast_time: '0.<small>3</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Willump" title="Willump"><img alt="Willump" src="/wiki/images/WillumpSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Willump" title="Willump">Willump</a></span></span> takes a bite out of the target enemy, dealing damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself. The heal is increased when he is <span style="color: #1F995C; white-space:normal">below half health</span>.',
      'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> he deals <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
      'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and the heal is reduced.',
    ],
    description: [
      {
        icon: '/wiki/images/Consume.png',
        description:
          'Active: Willump takes a bite out of the target enemy, dealing damage and  healing himself. The heal is increased by 50% while he is below 50% maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Willump</b> takes a bite out of the target enemy, dealing damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself. The heal is increased by 50% while he is <span style="color: #1F995C; white-space:normal">below 50% <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'The heal is increased by 50% while he is below 50% maximum health.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'while he is below 50heal is increased by 50',
            pre: 'The heal is increased by 50% while he is below 50% maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Against  minions and  monsters, he deals  true damage. Additionally, if Consume would kill the target minion or small or medium monster, the target is  stunned and  pulled towards Willump over the cast time.',
        descriptionHTML:
          'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, he deals <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>. Additionally, if <i>Consume</i> would kill the target minion or small or medium monster, the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> towards <b>Willump</b> over the cast time.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Non-Champion True Damage:',
            values: '400 / 600 / 800 / 1000 / 1200',
            valuesHTML: '400 / 600 / 800 / 1000 / 1200',
          },
          {
            name: 'Base Non-Champion Heal:',
            values: '65 / 95 / 125 / 155 / 185 (+ 90% AP) (+ 10% bonus health)',
            valuesHTML:
              '65 / 95 / 125 / 155 / 185 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;10% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Non-Champion True Damage:',
            raw: '400 / 600 / 800 / 1000 / 1200',
            damagetype: 'True',
            values: [400, 600, 800, 1000, 1200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '400 / 600 / 800 / 1000 / 1200',
          },
          {
            effectType: 'Heal',
            name: 'Base Non-Champion Heal:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 90% AP) (+ 10% bonus health)',
            healType: 'BonusHealth',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
              },
            ],
          },
        ],
      },
      {
        description:
          'Against  champions, he deals magic damage and the heal is reduced to 60%.',
        descriptionHTML:
          'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and the heal is reduced to 60%.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Against  champions, he deals magic damage and the heal is reduced to 60%.',
            healType: 'DrainEffect',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '. champions, he deals magic damage and the heal is reduced to 60',
            pre: 'Against  champions, he deals magic damage and the heal is reduced to 60%.',
          },
        ],
        leveling: [
          {
            name: 'Champion Magic Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 65% AP) (+ 5% bonus health)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% <b>bonus</b> health)</span>',
          },
          {
            name: 'Base Champion Heal:',
            values: '39 / 57 / 75 / 93 / 111 (+ 54% AP) (+ 6% bonus health)',
            valuesHTML:
              '39 / 57 / 75 / 93 / 111 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;54% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;6% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Champion Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 65% AP) (+ 5% bonus health)',
            healType: 'BonusHealth',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
              {
                values: 5,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 5% bonus health',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Base Champion Heal:',
            raw: '39 / 57 / 75 / 93 / 111 (+ 54% AP) (+ 6% bonus health)',
            healType: 'BonusHealth',
            values: [39, 57, 75, 93, 111],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '39 / 57 / 75 / 93 / 111',
            children: [
              {
                values: 54,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 54% AP',
              },
              {
                values: 6,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 6% bonus health',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">True damage</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic damage</a></span>',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* Icon border glows when he is within the maximum healing threshold.\n<ul><li><ul><li>This counts as an immobilization for triggering <a href="/wiki/Immolate" class="mw-redirect" title="Immolate">Immolate</a>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will block the damage and the heal.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Biggest Snowball Ever!': {
    name: 'Biggest Snowball Ever!',
    display_name: 'Biggest Snowball Ever!',
    champion: 'Nunu',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NunuW.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '750 − 1750 (based on charge time)',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Minimum snowball throw speed">350</span>',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">14</span>',
    customlabel: 'Size Radius',
    custominfo:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="charge time" data-displayformula="Increases by 62.5 units every 2.5 seconds" data-bot_values="75;137.5;200" data-top_values="0;2.5;5">75 − 200 (based on charge time)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Willump" title="Willump"><img alt="Willump" src="/wiki/images/WillumpSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Willump" title="Willump">Willump</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">Slow-immune</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for some time, creating a <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="snowball" src="/wiki/images/Biggest_Snowball_Ever%21_Minimap.png" decoding="async" loading="lazy" title="snowball" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;">snowball</span></span> that grows in size and speed over a few seconds. <b>Willump</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> during this time and can steer the snowball with gradual control. The snowball deals <span style="color: #00B0F0; white-space:normal">magic damage</span> when rolling over <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small monsters.',
      'The snowball will explode upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, medium  / large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or terrain, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span>, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them. The effect is increased based on the size of the snowball. <br><br><i>Biggest Snowball Ever!</i> can be recast during the channel, and does so automatically afterwards or if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Willump</b> sends the snowball forward for a short time before expiring.',
    ],
    description: [
      {
        icon: '/wiki/images/Biggest Snowball Ever!.png',
        description:
          'Active: Willump  cleanses himself from all  slows and  channels for up to 10 seconds, becoming  ghosted and  slow-immune and creating a rolling  snowball. Willump automatically navigates his movement and can steer the snowball with a slow turn rate that increases over time, resetting upon changing direction. The duo have their  movement speed reduced by 50% for the first 1 second, but after a delay they start gaining 14 movement speed every 0.25 seconds, up to a cap.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Willump</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 10 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow-immune</a></span> and creating a rolling <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="snowball" src="/wiki/images/Biggest_Snowball_Ever%21_Minimap.png" decoding="async" loading="lazy" title="snowball" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;">snowball</span></span>. <b>Willump</b> automatically navigates his movement and can steer the snowball with a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes.">slow turn rate</span> that increases over time, resetting upon changing direction. The duo have their <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> reduced by <span style="color: #F5EE99; white-space:normal">50%</span> for the first 1 second, but after a delay they start gaining <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated"><span style="color: #F5EE99; white-space:normal">14 movement speed</span></span> every 0.<small>25</small> seconds, <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes.">up to a cap</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Willump  cleanses himself from all  slows and  channels for up to 10 seconds, becoming  ghosted and  slow-immune and creating a rolling  snowball',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'cleanses himself from all  slows and  channels for up to 10 seconds, becoming  ghosted and  slow-immune and creating a rolling  snowball',
            pre: 'Willump  cleanses himself from all  slows and  channels for up to 10 seconds, becoming  ghosted and  slow-immune and creating a rolling  snowball',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'The duo have their  movement speed reduced by 50% for the first 1 second, but after a delay they start gaining 14 movement speed every 0.25 seconds, up to a cap.',
            increasedStat: 'total_ap',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'for the first 1 second, but after a delay they start gaining 14 movement speed every 0.25 seconds, up to a cap.duo have their  movement speed reduced by 50',
            pre: 'The duo have their  movement speed reduced by 50% for the first 1 second, but after a delay they start gaining 14 movement speed every 0.25 seconds, up to a cap.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The snowball increases in size and power over 5 seconds. Biggest Snowball Ever! can be recast after 0.5 seconds during the channel, and does so automatically after the channel or if  interrupted.',
        descriptionHTML:
          'The snowball increases in size and power over 5 seconds. <i>Biggest Snowball Ever!</i> can be recast after 0.<small>5</small> seconds during the channel, and does so automatically after the channel or if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The snowball increases in size and power over 5 seconds',
            values: 5,
            user: 'none',
            units: '',
            unitsText: 'snowball increases in size and power over 5 seconds',
            pre: 'The snowball increases in size and power over 5 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The snowball explodes upon hitting an enemy  champion,  large pet, medium / large  monster or terrain, dealing magic damage to nearby enemies, increased by 0% − 400% (based on charge time),  knocking them up for 0.5 − 0.75 (based on charge time) seconds and subsequently  stunning them for 0 − 0.5 (based on charge time) seconds.',
        descriptionHTML:
          'The snowball explodes upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">large pet</a></span>, medium / large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or terrain, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="charge time" data-displayformula="increases per frame after 1 second" data-bot_values="0;0;100;200;300;400" data-top_values="0;1;2;3;4;5" data-bot_key="%">0% − 400% (based on charge time)</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="charge time" data-displayformula="Increases per game tick after 1 second." data-bot_values="0.5;0.5;0.56;0.63;0.69;0.75" data-top_values="0;1;2;3;4;5">0.<small>5</small> − 0.<small>75</small> (based on charge time)</span> seconds and subsequently <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="charge time" data-displayformula="Increases per game tick after 2.33 seconds." data-bot_values="0;0;0;0;0.06;0.13;0.19;0.25;0.31;0.38;0.44;0.5" data-top_values="0;1;2;2.33;2.67;3;3.33;3.67;4;4.33;4.67;5">0 − 0.<small>5</small> (based on charge time)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The snowball explodes upon hitting an enemy  champion,  large pet, medium / large  monster or terrain, dealing magic damage to nearby enemies, increased by 0% − 400% (based on charge time),  knocking them up for 0.5 − 0.75 (based on charge time) seconds and subsequently  stunning them for 0 − 0.5 (based on charge time) seconds.',
            damagetype: 'Magic',
            values: [0, 0],
            valuesIsPercent: true,
            basedOn: 'charge time',
            user: 'none',
            units: '',
            unitsText: ',  knocking them up for 0.5 − 0.75',
            pre: 'The snowball explodes upon hitting an enemy  champion,  large pet, medium / large  monster or terrain, dealing magic damage to nearby enemies, increased by 0% − 400%',
            post: ',  knocking them up for 0.5 − 0.75',
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '36 / 45 / 54 / 63 / 72 (+ 30% AP)',
            valuesHTML:
              '36 / 45 / 54 / 63 / 72 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '36 / 45 / 54 / 63 / 72 (+ 30% AP)',
            damagetype: 'Magic',
            values: [36, 45, 54, 63, 72],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '36 / 45 / 54 / 63 / 72',
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
        description:
          'The snowball rolls over enemy  minions and small monsters hit, dealing 33.3% of the damage as magic damage.',
        descriptionHTML:
          'The snowball rolls over enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small monsters hit, dealing 33.<small>3</small>% of the damage as <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The snowball rolls over enemy  minions and small monsters hit, dealing 33.3% of the damage as magic damage.',
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the damage as magic damage.snowball rolls over enemy  minions and small monsters hit, dealing 33.3',
            pre: 'The snowball rolls over enemy  minions and small monsters hit, dealing 33.3% of the damage as magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Reduced Damage:',
            values: '11.988 / 14.985 / 17.982 / 20.979 / 23.976 (+ 9.99% AP)',
            valuesHTML:
              '11.<small>988</small> / 14.<small>985</small> / 17.<small>982</small> / 20.<small>979</small> / 23.<small>976</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;9.<small>99</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Reduced Damage:',
            raw: '11.988 / 14.985 / 17.982 / 20.979 / 23.976 (+ 9.99% AP)',
            damagetype: 'None',
            values: [11.988, 14.985, 17.982, 20.979, 23.976],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '11.988 / 14.985 / 17.982 / 20.979 / 23.976',
            children: [
              {
                values: 9.99,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 9.99% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Biggest Snowball Ever! 2.png',
        description:
          'Recast: Willump releases the snowball, sending it rolling forward up to a maximum distance during which it will not grow any larger and will explode upon hitting an enemy.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Willump</b> releases the snowball, sending it rolling forward up to a maximum distance during which it will not grow any larger and will explode upon hitting an enemy.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '*The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The movement speed reduction the duo receive from initially casting <i>Biggest Snowball Ever!</i> is not considered a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>, thus it will not be resisted by their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span>.</li>\n<li>There are 3 stages where the turn rate increases from the original one:\n<ul><li>After turning for 1 second, the turn rate is increased to 175%.</li>\n<li>After turning for 3 seconds, the turn rate is increased to 250%.</li>\n<li>After turning for 6 seconds, the turn rate is increased to 325% where it caps.</li></ul></li>\n<li>The time threshold to begin gaining bonus movement speed may be bugged, as Flat Bonus MS increases the time while&nbsp;% Bonus MS decreases the time.\n<ul><li>The formula appears to be (X ÷ 100) - Y, where:\n<ul><li>X = <b>Total</b> Flat MS after caps</li>\n<li>Y = 0.<small>1</small> per 1% %MS</li></ul></li>\n<li>The delay is not modified from its initially calculated value on-cast, even if additional movement speed is gained.</li></ul></li>\n<li><b>Nunu and Willump</b> keep all increases in <span style="color: #F5EE99; white-space:normal">movement speed</span> at time of cast for the duration of the charge.</li>\n<li><b>Nunu and Willump\'s</b> movement speed always increases in increments of ~14, reaching the greater value between <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #F5EE99; white-space:normal"><b>Total</b> MS +&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="85;" data-finish="255;" data-bot_values="85;95;105;115;125;135;145;155;165;175;185;195;205;215;225;235;245;255" data-top_values="">85 − 255 (based on level)</span></span>&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #F5EE99; white-space:normal"><b>Total</b></span> <a href="/wiki/Movement_speed#Movement_speed_caps" title="Movement speed">Uncapped</a> <span style="color: #F5EE99; white-space:normal">Flat MS +&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="85;" data-finish="255;" data-bot_values="85;95;105;115;125;135;145;155;165;175;185;195;205;215;225;235;245;255" data-top_values="">85 − 255 (based on level)</span></span>&nbsp;」</span></span> (<i>click to toggle</i>).\n<ul><li>This takes 6 increments to reach the <b>Total</b> MS + 85, but may take more to reach the Uncapped Flat + 85. Due to flat bonuses increasing the time threshold, it is possible for the ability\'s effects to end before reaching the <b>total</b> uncapped movement speed.</li>\n<li>The <b>bonus</b> movement speed ignores the <a href="/wiki/Movement_speed#Movement_speed_caps" title="Movement speed">movement speed cap</a>.</li></ul></li>\n<li>If <b>Nunu</b> turns continuously he will create a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">600</span> unit circle, increased with <b>bonus</b> movement speed, striking the same point up to 3 times, for a maximum of <span style="color: #00B0F0; white-space:normal">180 / 225 / 270 / 315 / 360</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;300% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>. The damage can be further increased by detonating the snowball, for a <b>total</b> of <span style="color: #00B0F0; white-space:normal">360 / 450 / 540 / 630 / 720</span> <span style="color: #7A6DFF; white-space:normal">(+450% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>.</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL" title="Ryze\'s"><img alt="Ryze\'s" src="/wiki/images/Ryze_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL" title="Ryze/LoL">Ryze\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Realm Warp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Realm Warp"><img alt="Realm Warp" src="/wiki/images/Ryze_Realm_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Ryze/LoL">Realm Warp</a></span></span></span> will only teleport <b>Nunu and Willump</b>, leaving the <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="snowball" src="/wiki/images/Biggest_Snowball_Ever%21_Minimap.png" decoding="async" loading="lazy" title="snowball" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;">snowball</span></span> behind.</li>\n<li>Hovering the cursor on the HUD (e.g <a href="/wiki/Map_(League_of_Legends)" title="Map (League of Legends)">mini map</a> / champion portraits) does not affect the cast and steering of <i>Biggest Snowball Ever!</i>.</li>\n<li><b>Nunu</b> gains a slightly larger field of view during <i>Biggest Snowball Ever!</i>.</li>\n<li><i>Biggest Snowball Ever!</i> is disabled for the first 15 seconds of the game.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>The following table refers for interactions while <b>Nunu &amp; Willump</b> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed, but cannot input movement commands.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Nunu_Original_W_2.ogg   "This is gonna be the biggest snowball ever!"',
  },
  'Snowball Barrage': {
    name: 'Snowball Barrage',
    display_name: 'Snowball Barrage',
    champion: 'Nunu',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'NunuE.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '690',
    cast_time: 'None',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">14 / 13 / 12 / 11 / 10</span>',
    customlabel:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">Barrage Cooldown</span>',
    custominfo: '1',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nunu &amp; Willump" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nunu_%26_Willump/LoL" title="Nunu"><img alt="Nunu" src="/wiki/images/Nunu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nunu_%26_Willump/LoL" class="mw-redirect" title="Nunu &amp; Willump/LoL">Nunu</a></span></span> swiftly throws a volley of 3 snowballs in the target direction that each shatter upon hitting an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a cone. Enemies hit 3 times are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">Champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit once are marked <i>Snowbound</i> for a few seconds. <br><br>Shortly after activating <i>Snowball Barrage</i>, <i>Snowbound</i> enemies near <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Willump" title="Willump"><img alt="Willump" src="/wiki/images/WillumpSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Willump" title="Willump">Willump</a></span></span> take <span style="color: #00B0F0; white-space:normal">magic damage</span> and are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
      '<i>Snowball Barrage</i> can be recast twice within a short time.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Nunu</b> hurls another volley of snowballs.',
    ],
    description: [
      {
        icon: '/wiki/images/Snowball Barrage.png',
        description:
          'Active: Nunu swiftly throws a volley of 3 snowballs in the target direction over 0.4 seconds that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nunu</b> swiftly throws a volley of 3 snowballs in the target direction over 0.<small>4</small> seconds that each shatter upon hitting an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a cone.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Nunu swiftly throws a volley of 3 snowballs in the target direction over 0.4 seconds that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone.',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'swiftly throws a volley of 3 snowballs in the target direction over 0.4 seconds that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone.',
            pre: 'Nunu swiftly throws a volley of 3 snowballs in the target direction over 0.4 seconds that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Hit:',
            values: '16 / 24 / 32 / 40 / 48 (+ 10% AP)',
            valuesHTML:
              '16 / 24 / 32 / 40 / 48 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Hit:',
            raw: '16 / 24 / 32 / 40 / 48 (+ 10% AP)',
            damagetype: 'Magic',
            values: [16, 24, 32, 40, 48],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '16 / 24 / 32 / 40 / 48',
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
          'Enemies hit 3 times are  slowed for 1 second.  Champions and large  monsters hit once are marked Snowbound for 4 seconds, refreshing on each hit. Snowball Barrage can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
        descriptionHTML:
          'Enemies hit 3 times are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1 second. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">Champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit once are marked <i>Snowbound</i> for 4 seconds, refreshing on each hit. <i>Snowball Barrage</i> can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Enemies hit 3 times are  slowed for 1 second',
            values: 3,
            user: 'none',
            units: '',
            unitsText: 'hit 3 times are  slowed for 1 second',
            pre: 'Enemies hit 3 times are  slowed for 1 second',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: ' Champions and large  monsters hit once are marked Snowbound for 4 seconds, refreshing on each hit',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'and large  monsters hit once are marked Snowbound for 4 seconds, refreshing on each hit',
            pre: 'Champions and large  monsters hit once are marked Snowbound for 4 seconds, refreshing on each hit',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Snowball Barrage can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
            damagetype: 'None',
            values: 3,
            units: 'total_ad',
            unitsText:
              'Barrage can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
            pre: 'Snowball Barrage can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
      },
      {
        description:
          "Recast: Nunu hurls another volley of snowballs, mimicking the first cast's effects. An enemy may only be  slowed once for being hit by snowballs.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Nunu</b> hurls another volley of snowballs, mimicking the first cast\'s effects. An enemy may only be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> once for being hit by snowballs.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Maximum Total Magic Damage:',
            values: '144 / 216 / 288 / 360 / 432 (+ 90% AP)',
            valuesHTML:
              '144 / 216 / 288 / 360 / 432 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Maximum Total Magic Damage:',
            raw: '144 / 216 / 288 / 360 / 432 (+ 90% AP)',
            damagetype: 'Magic',
            values: [144, 216, 288, 360, 432],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '144 / 216 / 288 / 360 / 432',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'After 3 seconds from the first cast, Snowbound enemies near Willump take magic damage and are  rooted for 0.5 − 1.5 (based on level) seconds.',
        descriptionHTML:
          'After 3 seconds from the first cast, <i>Snowbound</i> enemies near <b>Willump</b> take <span style="color: #00B0F0; white-space:normal">magic damage</span> and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.5;" data-finish="1.5;" data-bot_values="0.5;0.56;0.62;0.68;0.74;0.79;0.85;0.91;0.97;1.03;1.09;1.15;1.21;1.26;1.32;1.38;1.44;1.5" data-top_values="">0.<small>5</small> − 1.<small>5</small> (based on level)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After 3 seconds from the first cast, Snowbound enemies near Willump take magic damage and are  rooted for 0.5 − 1.5 (based on level) seconds.',
            damagetype: 'Magic',
            values: [
              0.5, 0.56, 0.62, 0.68, 0.74, 0.79, 0.85, 0.91, 0.97, 1.03, 1.09,
              1.15, 1.21, 1.26, 1.32, 1.38, 1.44, 1.5,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: 'After 3 seconds from the first cast, Snowbound enemies near Willump take magic damage and are  rooted for 0.5 − 1.5',
            post: 'seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '20 / 30 / 40 / 50 / 60 (+ 80% AP)',
            valuesHTML:
              '20 / 30 / 40 / 50 / 60 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 80% AP)',
            damagetype: 'Magic',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
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
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* Each cast volley of snowballs counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>\n<ul><li><ul><li>Each volley of snowballs is also a separate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span>, allowing <i>Snowball Barrage</i> to trigger <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Phase Rush" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phase_Rush_(Rune)" title="Phase Rush"><img alt="Phase Rush" src="/wiki/images/Phase_Rush_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Phase_Rush_(Rune)" class="mw-redirect" title="Phase Rush (Rune)">Phase Rush</a></span></span> on its own or trigger 6 stacks of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>.</li>\n<li><i>Snowbound</i> consumption does not trigger on-cast effects, neither does it count as a separate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span> (e.g. for the purposes of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>).</li></ul></li>\n<li>The three snowballs are thrown independently from one another over the 0.<small>4</small> seconds and their direction is determined from <b>Nunu &amp; Willump\'s</b> position at any given moment.</li></ul>',
  },
  'Absolute Zero': {
    name: 'Absolute Zero',
    display_name: 'Absolute Zero',
    champion: 'Nunu',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'NunuR.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 650',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">110 / 105 / 100 / 95 / 90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nunu &amp; Willump" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nunu_%26_Willump/LoL" title="Nunu"><img alt="Nunu" src="/wiki/images/Nunu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nunu_%26_Willump/LoL" class="mw-redirect" title="Nunu &amp; Willump/LoL">Nunu</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Willump" title="Willump"><img alt="Willump" src="/wiki/images/WillumpSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Willump" title="Willump">Willump</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> a blizzard for a short time, gaining a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies.',
      '<i>Absolute Zero</i> can be recast during the channel, and does so automatically when the channel ends by any means.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Nunu</b> and <b>Willump</b> explode, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. The effect is modified based on the channel time.',
    ],
    description: [
      {
        icon: '/wiki/images/Absolute Zero.png',
        description:
          'Active: Nunu and Willump  channel a blizzard for up to 3 seconds, granting themself a  shield and  slowing nearby enemies by 0% − 95% (based on channel time).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nunu</b> and <b>Willump</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> a blizzard for up to 3 seconds, granting themself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="Increases by 4.5% every 0.25 seconds. \'\'Starts at 0.25 seconds and finishes at 2.75 seconds\'\'" data-bot_values="0;50;54.5;59;63.5;68;72.5;77;81.5;86;90.5;95;95" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3" data-bot_key="%">0% − 95% (based on channel time)</span>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Nunu and Willump  channel a blizzard for up to 3 seconds, granting themself a  shield and  slowing nearby enemies by 0% − 95% (based on channel time).',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 3,
            valuesIsPercent: true,
            basedOn: 'channel time',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Nunu and Willump  channel a blizzard for up to 3 seconds, granting themself a  shield and  slowing nearby enemies by 0% − 95%',
            post: '.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values:
              '65 / 70 / 75 / 80 / 85 (+ 150% AP) (+ 30 / 35 / 40 / 45 / 50% bonus health)',
            valuesHTML:
              '65 / 70 / 75 / 80 / 85 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;30 / 35 / 40 / 45 / 50% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '65 / 70 / 75 / 80 / 85 (+ 150% AP) (+ 30 / 35 / 40 / 45 / 50% bonus health)',
            healType: 'BonusHealth',
            values: [65, 70, 75, 80, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 70 / 75 / 80 / 85',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
              {
                values: [30, 35, 40, 45, 50],
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 30 / 35 / 40 / 45 / 50% bonus health',
              },
            ],
          },
        ],
      },
      {
        description:
          'Absolute Zero can be recast after 0.5 seconds during the channel, and does so automatically when the channel ends by any means.',
        descriptionHTML:
          '<i>Absolute Zero</i> can be recast after 0.<small>5</small> seconds during the channel, and does so automatically when the channel ends by any means.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Absolute Zero 2.png',
        description:
          "Recast: Nunu and Willump explode, dealing magic damage to nearby enemies, modified to 0% − 100% (based on channel time). Affected enemies will remain  slowed for 0 − 3 (based on channel time) seconds and any of the duo's remaining shield will decay over 3 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Nunu</b> and <b>Willump</b> explode, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, modified to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="Increases the damage by 1% of its damage value every 0.03 seconds." data-bot_values="0;33.33;66.67;100" data-top_values="0;1;2;3" data-bot_key="%">0% − 100% (based on channel time)</span>. Affected enemies will remain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-start="0;0" data-finish="3;3" data-bot_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3">0 − 3 (based on channel time)</span> seconds and any of the duo\'s remaining shield will decay over 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: "Affected enemies will remain  slowed for 0 − 3 (based on channel time) seconds and any of the duo's remaining shield will decay over 3 seconds.",
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [0, 3],
            basedOn: 'channel time',
            user: 'none',
            units: '',
            unitsText:
              "seconds and any of the duo's remaining shield will decay over 3 seconds.",
            pre: 'Affected enemies will remain  slowed for 0 − 3',
            post: "seconds and any of the duo's remaining shield will decay over 3 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '625 / 787.5 / 950 / 1112.5 / 1275 (+ 300% AP)',
            valuesHTML:
              '625 / 787.<small>5</small> / 950 / 1112.<small>5</small> / 1275 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;300% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '625 / 787.5 / 950 / 1112.5 / 1275 (+ 300% AP)',
            damagetype: 'Magic',
            values: [625, 787.5, 950, 1112.5, 1275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '625 / 787.5 / 950 / 1112.5 / 1275',
            children: [
              {
                values: 300,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 300% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '*The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The affected area is hidden if the duo is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to the enemy team.</li>\n<li>While it\'s unlikely to happen normally, it is possible to deal zero damage with <i>Absolute Zero</i> if canceled as soon as it\'s started.</li>\n<li>The following table refers for interactions while <b>Nunu &amp; Willump</b> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
