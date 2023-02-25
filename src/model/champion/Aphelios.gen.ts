import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Aphelios';

export default {
  'The Hitman and the Seer': {
    name: 'The Hitman and the Seer',
    display_name: 'The Hitman and the Seer',
    champion: 'Aphelios',
    skill: 'I',
    image: {
      full: 'ApheliosP.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios"><img alt="Aphelios" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios</a></span></span> wields 5 Lunari Weapons made by his sister <b>Alune</b>. He has access to two at a time: <span style="color: #7A6DFF; white-space:normal">main weapon</span> and <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon. Each weapon has a unique basic attack and a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> active ability.',
      '<span class="template_sbc"><b>Moonlight:</b></span> Attacks and abilities consume a weapon\'s ammo. When out of ammo, <b>Aphelios</b> discards the weapon to the reserve and <b>Alune</b> summons the next of the 5.',
      '<span class="template_sbc"><b>Weapon Master:</b></span> <b>Aphelios</b> cannot improve his abilities with skill points, instead he spend those for <b>bonus</b> stats: <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack damage</span></span>, <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack speed</span></span>, and <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;lethality</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/The_Hitman_and_the_Seer.png',
        description:
          'Innate: Aphelios has access to an arsenal of 5 Moonstone Weapons, created by his sister Alune. He equips two weapons at any one time, one as his main weapon and one as his off-hand. Each weapon has a unique basic attack and passive effect.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Aphelios</b> has access to an arsenal of 5 <i>Moonstone Weapons</i>, created by his sister <b>Alune</b>. He equips two weapons at any one time, one as his <span style="color: #7A6DFF; white-space:normal">main weapon</span> and one as his <span style="color: #E34D4C; white-space:normal">off-hand</span>. Each weapon has a unique <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> and passive effect.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: 'Aphelios has access to an arsenal of 5 Moonstone Weapons, created by his sister Alune',
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText:
              'has access to an arsenal of 5 Moonstone Weapons, created by his sister Alune',
            pre: 'Aphelios has access to an arsenal of 5 Moonstone Weapons, created by his sister Alune',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Aphelios begins the game with  Calibrum as his main weapon and  Severum in his off-hand, with  Gravitum,  Infernum, and  Crescendum queued in reserve. The queue order can be rearranged based on weapon usage.',
        descriptionHTML:
          '<b>Aphelios</b> begins the game with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Calibrum"><img alt="Calibrum" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Calibrum</a></span></span> as his <span style="color: #7A6DFF; white-space:normal">main weapon</span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span> in his <span style="color: #E34D4C; white-space:normal">off-hand</span>, with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span> queued in reserve. The queue order can be rearranged based on weapon usage.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/The_Hitman_and_the_Seer_2.png',
        description:
          'Innate - Moonlight: Weapons spawn with 50 Moonlight for ammunition, which is consumed on basic attacks on-attack or to cast his  abilities. Abilities that cause Aphelios to attack do not cost additional Moonlight on top of their ability cost. Once his main weapon is exhausted of Moonlight, it is moved to the end of the queue and Aphelios assembles his next available weapon over 1 second to equip it from his reserve, with its  ability being placed on a 1.5-second  cooldown before that time. Aphelios cannot cast  Phase during the assembly.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Moonlight:</b></span> Weapons spawn with 50 <i>Moonlight</i> for <a href="/wiki/Ammunition" title="Ammunition">ammunition</a>, which is consumed on basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> or to cast his <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Champion_ability" title="abilities"><img alt="abilities" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Champion_ability" title="Champion ability">abilities</a></span></span>. Abilities that cause <b>Aphelios</b> to attack do not cost additional <i>Moonlight</i> on top of their ability cost. Once his <span style="color: #7A6DFF; white-space:normal">main weapon</span> is exhausted of <i>Moonlight</i>, it is moved to the end of the queue and <b>Aphelios</b> assembles his next available weapon over 1 second to equip it from his reserve, with its <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> being placed on a 1.<small>5</small>-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> before that time. <b>Aphelios</b> cannot cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Phase" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Phase" title="Phase"><img alt="Phase" src="/wiki/images/Aphelios_Phase.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Phase" title="Aphelios/LoL">Phase</a></span></span> during the assembly.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Moonlight:',
            raw: 'Weapons spawn with 50 Moonlight for ammunition, which is consumed on basic attacks on-attack or to cast his  abilities',
            damagetype: 'None',
            values: 5,
            units: 'total_ad',
            unitsText:
              'spawn with 50 Moonlight for ammunition, which is consumed on basic attacks on-attack or to cast his  abilities',
            pre: 'Weapons spawn with 50 Moonlight for ammunition, which is consumed on basic attacks on-attack or to cast his  abilities',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Once his main weapon is exhausted of Moonlight, it is moved to the end of the queue and Aphelios assembles his next available weapon over 1 second to equip it from his reserve, with its  ability being placed on a 1.5-second  cooldown before that time',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'his main weapon is exhausted of Moonlight, it is moved to the end of the queue and Aphelios assembles his next available weapon over 1 second to equip it from his reserve, with its  ability being placed on a 1.5-second  cooldown before that time',
            pre: 'Once his main weapon is exhausted of Moonlight, it is moved to the end of the queue and Aphelios assembles his next available weapon over 1 second to equip it from his reserve, with its  ability being placed on a 1.5-second  cooldown before that time',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Innate - Weapon Master: Aphelios cannot improve his abilities with skill points. He starts the game with  Phase and gains access to  abilities at level 2 and  Moonlight Vigil at level 6, with the latter improving automatically at levels 11 and 16. Instead, Aphelios may spend his skill points to gain  bonus attack damage,  bonus attack speed or  lethality.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Weapon Master:</b></span> <b>Aphelios</b> cannot improve his abilities with <a href="/wiki/Experience_(champion)" title="Experience (champion)">skill points</a>. He starts the game with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Phase" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Phase" title="Phase"><img alt="Phase" src="/wiki/images/Aphelios_Phase.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Phase" title="Aphelios/LoL">Phase</a></span></span> and gains access to <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Champion_ability" title="abilities"><img alt="abilities" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Champion_ability" title="Champion ability">abilities</a></span></span> at level 2 and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Moonlight Vigil" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Moonlight Vigil"><img alt="Moonlight Vigil" src="/wiki/images/Aphelios_Moonlight_Vigil.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Aphelios/LoL">Moonlight Vigil</a></span></span> at level 6, with the latter improving automatically at levels 11 and 16. Instead, <b>Aphelios</b> may spend his skill points to gain <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack damage</span></span>, <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span> or <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:tomato; white-space:normal">lethality</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He starts the game with  Phase and gains access to  abilities at level 2 and  Moonlight Vigil at level 6, with the latter improving automatically at levels 11 and 16',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'starts the game with  Phase and gains access to  abilities at level 2 and  Moonlight Vigil at level 6, with the latter improving automatically at levels 11 and 16',
            pre: 'He starts the game with  Phase and gains access to  abilities at level 2 and  Moonlight Vigil at level 6, with the latter improving automatically at levels 11 and 16',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '5 / 10 / 15 / 20 / 25 / 30',
            valuesHTML:
              '<span style="color:orange; white-space:normal">5 / 10 / 15 / 20 / 25 / 30</span>',
          },
          {
            name: 'Bonus Attack Speed:',
            values: '9 / 18 / 27 / 36 / 45 / 54%',
            valuesHTML:
              '<span style="color:orangered; white-space:normal">9 / 18 / 27 / 36 / 45 / 54%</span>',
          },
          {
            name: 'Lethality:',
            values: '5.5 / 11 / 16.5 / 22 / 27.5 / 33',
            valuesHTML:
              '<span style="color:tomato; white-space:normal">5.<small>5</small> / 11 / 16.<small>5</small> / 22 / 27.<small>5</small> / 33</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '5 / 10 / 15 / 20 / 25 / 30',
            damagetype: 'None',
            values: [5, 10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25 / 30',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '9 / 18 / 27 / 36 / 45 / 54%',
            values: [9, 18, 27, 36, 45, 54],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '9 / 18 / 27 / 36 / 45 / 54%',
          },
          {
            effectType: 'Unique',
            name: 'Lethality:',
            raw: '5.5 / 11 / 16.5 / 22 / 27.5 / 33',
            values: [5.5, 11, 16.5, 22, 27.5, 33],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5.5 / 11 / 16.5 / 22 / 27.5 / 33',
          },
        ],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The <a href="/wiki/Experience_(champion)" title="Experience (champion)">level up</a> for the bonus <a href="/wiki/Attack_damage" title="Attack damage">attack damage</a>, <a href="/wiki/Attack_speed" title="Attack speed">attack speed</a>, and <a href="/wiki/Armor_penetration" title="Armor penetration">armor penetration</a> have hotkeys Q, W, E, respectively.\n<ul><li><ul><li>Assigning points <b>does not</b> follow the same rules as conventional point expenditure. The quickest you can get an individual statistic to rank-6 is by assigning points at 1 / 2 / 3 / 5 / 7 / 9.</li></ul></li>\n<li>An ammunition counter will appear to the right side of the screen at 10 or less <i>Moonlight</i>.</li>\n<li>Abilities can still be used with less than the required amount of <i>Moonlight</i>, consuming all remaining <i>Moonlight</i> in the process.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> does not consume additional <i>Moonlight</i> for his basic attacks.</li>\n<li>The icon for this ability changes based on the active skin and functions as <b>Alune\'s</b> portrait, similarly to <b>Aphelios\'</b> portrait.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aphelios_Original_Attack_6.ogg   "This will be your voice."',
  },
  Calibrum: {
    name: 'Calibrum',
    display_name: 'Calibrum, the Sniper Rifle',
    champion: 'Aphelios',
    skill: 'A',
    cost: '1',
    costtype: 'Moonlight per attack',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios"><img alt="Aphelios" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios</a></span></span> has <span style="color: #FFFDC9; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span></span> while <b>Calibrum</b> is his <span style="color: #7A6DFF; white-space:normal">main weapon</span>. Abilities will mark targets, and he may attack them from far away with the current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, consuming all marks and dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> for each mark consumed.',
      'While Calibrum is the <span style="color: #7A6DFF; white-space:normal">main weapon</span>, his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> ability will be:',
    ],
    description: [
      {
        icon: '/wiki/images/Calibrum.png',
        description:
          "Aphelios gains  100 bonus attack range while Calibrum is his main weapon. Enemies damaged by Calibrum through an ability are marked for 4.5 seconds,  revealing them for the duration. Aphelios'  next basic attack against a marked target uses the current off-hand weapon and has  1800 range, increased missile speed, and a brief cast time that lasts shorter based on Aphelios'  proximity to the target.",
        descriptionHTML:
          '<b>Aphelios</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;100 <b>bonus</b> attack range</span> while <b>Calibrum</b> is his <span style="color: #7A6DFF; white-space:normal">main weapon</span>. Enemies damaged by <b>Calibrum</b> through an ability are marked for 4.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for the duration. <b>Aphelios\' </b> next basic attack against a marked target uses the current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon and has <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1800 range</span>, increased missile speed, and a brief cast time that lasts shorter based on <b>Aphelios\' </b> proximity to the target.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Aphelios gains  100 bonus attack range while Calibrum is his main weapon',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'gains  100 bonus attack range while Calibrum is his main weapon',
            pre: 'Aphelios gains  100 bonus attack range while Calibrum is his main weapon',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies damaged by Calibrum through an ability are marked for 4.5 seconds,  revealing them for the duration',
            damagetype: 'None',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'damaged by Calibrum through an ability are marked for 4.5 seconds,  revealing them for the duration',
            pre: 'Enemies damaged by Calibrum through an ability are marked for 4.5 seconds,  revealing them for the duration',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: "Aphelios'  next basic attack against a marked target uses the current off-hand weapon and has  1800 range, increased missile speed, and a brief cast time that lasts shorter based on Aphelios'  proximity to the target.",
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              "next basic attack against a marked target uses the current off-hand weapon and has  1800 range, increased missile speed, and a brief cast time that lasts shorter based on Aphelios'  proximity to the target.",
            pre: "Aphelios'  next basic attack against a marked target uses the current off-hand weapon and has  1800 range, increased missile speed, and a brief cast time that lasts shorter based on Aphelios'  proximity to the target.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The empowered attack will consume the marks from all targets, dealing 15 (+ 20% bonus AD) bonus physical damage to the main target for each mark consumed. If Calibrum is the current off-hand weapon, the main weapon is used for the attack instead.',
        descriptionHTML:
          'The empowered attack will consume the marks from all targets, dealing <span style="color: #FF8C34; white-space:normal">15</span> <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> to the main target for each mark consumed. If <b>Calibrum</b> is the current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, the <span style="color: #7A6DFF; white-space:normal">main weapon</span> is used for the attack instead.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The empowered attack will consume the marks from all targets, dealing 15 (+ 20% bonus AD) bonus physical damage to the main target for each mark consumed',
            damagetype: 'Physical',
            values: 1,
            units: 'kindredMarks',
            unitsText:
              'bonus physical damage to the main target for each mark consumed',
            pre: 'The empowered attack will consume the marks from all targets, dealing 15',
            post: 'bonus physical damage to the main target for each mark consumed',
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
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'attack',
    projectile: 'Special',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum\'s"><img alt="Crescendum\'s" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum\'s</a></span></span> outgoing basic attack can bypass <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo\'s"><img alt="Yasuo\'s" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span></span> and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum\'s"><img alt="Braum\'s" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span></span> but cannot while returning.\n<ul><li>Triggered <i>Marks</i> apply on-hit effects, stack <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a> and trigger <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>, but no other <a href="/wiki/On-attack_effects" class="mw-redirect" title="On-attack effects">on-attack effects</a>.</li>\n<li>The mark will not be triggered by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Onslaught" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Onslaught" title="Onslaught"><img alt="Onslaught" src="/wiki/images/Aphelios_Onslaught.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Onslaught" title="Aphelios/LoL">Onslaught</a></span></span> attacks.</li>\n<li>The increased basic attack range is drawn for <b>Aphelios</b> to differentiate it from his normal attack range.</li>\n<li>The empowered range for the mark will also be drawn as an indicator for <b>Aphelios</b>.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> bolts will use <b>Calibrum\'s</b> projectiles for <b>Aphelios\'s</b> attacks with <b>Calibrum</b>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the empowered attack\'s cast time, it will still fire despite the target being invalid.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>\n<figure class="thumb tleft " style="width: 250px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Calibrum_Attack_Range_screenshot.png/revision/latest?cb=20200215181143" class="image"><img alt="" src="/wiki/images/Calibrum_Attack_Range_screenshot.png" decoding="async" loading="lazy" width="250" height="190" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Calibrum_Attack_Range_screenshot.png/revision/latest?cb=20200215181143" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Calibrum_Attack_Range_screenshot.png/revision/latest/scale-to-width-down/250?cb=20200215181143" decoding="async" loading="lazy" width="250" height="190" class="thumbimage" data-image-name="Calibrum Attack Range screenshot.png" data-image-key="Calibrum_Attack_Range_screenshot.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Calibrum_Attack_Range_screenshot.png/revision/latest/scale-to-width-down/250?cb=20200215181143"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">A blue circle outlining the range in which he may perform basic attacks.</p> \t\t \t</figcaption> </figure>\n<figure class="thumb tleft " style="width: 180px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Aphelios_Calibrum_Enhanced_Mark_Range.png/revision/latest?cb=20200714202618" class="image"><img alt="" src="/wiki/images/Aphelios_Calibrum_Enhanced_Mark_Range.png" decoding="async" loading="lazy" width="180" height="223" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Aphelios_Calibrum_Enhanced_Mark_Range.png/revision/latest?cb=20200714202618" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Aphelios_Calibrum_Enhanced_Mark_Range.png/revision/latest/scale-to-width-down/180?cb=20200714202618" decoding="async" loading="lazy" width="180" height="223" class="thumbimage" data-image-name="Aphelios Calibrum Enhanced Mark Range.png" data-image-key="Aphelios_Calibrum_Enhanced_Mark_Range.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Aphelios_Calibrum_Enhanced_Mark_Range.png/revision/latest/scale-to-width-down/180?cb=20200714202618"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">This glowing indicator will align directly behind each <i>marked</i> target.</p> \t\t \t</figcaption> </figure>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aphelios_Original_PassiveReload_Calibrum_3.ogg   "Calibrum."',
  },
  Severum: {
    name: 'Severum',
    display_name: 'Severum, the Scythe Pistol',
    champion: 'Aphelios',
    skill: 'A',
    cost: '1',
    costtype: 'Moonlight per attack',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios\'"><img alt="Aphelios\'" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios\'</a></span></span> basic attacks will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him, and create a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> from excess healing.',
      'While Severum is the <span style="color: #7A6DFF; white-space:normal">main weapon</span>, his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> ability will be:',
    ],
    description: [
      {
        icon: '/wiki/images/Severum.png',
        description:
          "Basic attacks with Severum are  non-projectile and have an  uncancellable windup. Severum's attacks  heal Aphelios for 2.5% − 9% (based on level) of the post-mitigation damage dealt, increased to 8.33% − 30% (based on level) for attacks from abilities.",
        descriptionHTML:
          'Basic attacks with <b>Severum</b> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> and have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>. <b>Severum\'s</b> attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Aphelios</b> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2.5;" data-finish="9;" data-bot_values="2.5;2.88;3.26;3.65;4.03;4.41;4.79;5.18;5.56;5.94;6.32;6.71;7.09;7.47;7.85;8.24;8.62;9" data-top_values="" data-bot_key="%">2.<small>5</small>% − 9% (based on level)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt, increased to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8.3325;" data-finish="29.997;" data-bot_values="8.33;9.61;10.88;12.16;13.43;14.7;15.98;17.25;18.53;19.8;21.08;22.35;23.63;24.9;26.17;27.45;28.72;30" data-top_values="" data-bot_key="%">8.<small>33</small>% − 30% (based on level)</span> for attacks from abilities.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Severum's attacks  heal Aphelios for 2.5% − 9% (based on level) of the post-mitigation damage dealt, increased to 8.33% − 30% (based on level) for attacks from abilities.",
            healType: 'DrainEffect',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'of the post-mitigation damage dealt, increased to 8.33% − 30%',
            pre: "Severum's attacks  heal Aphelios for 2.5% − 9%",
            post: 'of the post-mitigation damage dealt, increased to 8.33% − 30%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Healing from Severum in excess of Aphelios'   maximum health is converted into a  shield for an amount of up to 10 − 140 (based on level) (+ 6% maximum health), lingering for up to 30 seconds.",
        descriptionHTML:
          'Healing from <b>Severum</b> in excess of <b>Aphelios\' </b> <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span> is converted into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for an amount of up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10;20;30;40;50;60;70;80;90;100;110;120;130;140" data-top_values="1;6;7;8;9;10;11;12;13;14;15;16;17;18">10 − 140 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;6% <b>maximum</b> health)</span>, lingering for up to 30 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Healing from Severum in excess of Aphelios'   maximum health is converted into a  shield for an amount of up to 10 − 140 (based on level) (+ 6% maximum health), lingering for up to 30 seconds.",
            healType: 'BonusHealth',
            values: [
              10, 17.65, 25.29, 32.94, 40.59, 48.24, 55.88, 63.53, 71.18, 78.82,
              86.47, 94.12, 101.76, 109.41, 117.06, 124.71, 132.35, 140,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: ', lingering for up to 30 seconds.',
            pre: "Healing from Severum in excess of Aphelios'   maximum health is converted into a  shield for an amount of up to 10 − 140",
            post: ', lingering for up to 30 seconds.',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 6% maximum health',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'attack',
    projectile: 'False',
    notes:
      '* <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> bolts will use <b>Severum\'s</b> attack animation instead of firing projectiles for <b>Aphelios\' </b> attacks with <b>Severum</b>.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aphelios_Original_PassiveReload_Severum_1.ogg   "Severum."',
  },
  Gravitum: {
    name: 'Gravitum',
    display_name: 'Gravitum, the Gravity Cannon',
    champion: 'Aphelios',
    skill: 'A',
    cost: '1',
    costtype: 'Moonlight per attack',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios\'"><img alt="Aphelios\'" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios\'</a></span></span> basic attacks apply a decaying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.',
      'While Gravitum is the <span style="color: #7A6DFF; white-space:normal">main weapon</span>, his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> ability will be:',
    ],
    description: [
      {
        icon: '/wiki/images/Gravitum.png',
        description:
          'Basic attacks with Gravitum  slow enemies by 30% for 3.5 seconds, decaying to 10% after 0.7 seconds.',
        descriptionHTML:
          'Basic attacks with <b>Gravitum</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies by 30% for 3.<small>5</small> seconds, decaying to 10% after 0.<small>7</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Basic attacks with Gravitum  slow enemies by 30% for 3.5 seconds, decaying to 10% after 0.7 seconds.',
            values: 3,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'for 3.5 seconds, decaying to 10attacks with Gravitum  slow enemies by 30',
            pre: 'Basic attacks with Gravitum  slow enemies by 30% for 3.5 seconds, decaying to 10% after 0.7 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'attack',
    spellshield: false,
    projectile: 'True',
    notes:
      '* <i>Gravitum\'s</i> debuff applies even if the target is immune to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> (via <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">cc-immunity</a></span>).\n<ul><li><ul><li>The target will be affected after losing their immunity.</li></ul></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> bolts will use <i>Gravitum\'s</i> projectiles when <b>Aphelios</b> attacks with <i>Gravitum</i>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aphelios_Original_PassiveReload_Gravitum_2.ogg   "Gravitum."',
  },
  Infernum: {
    name: 'Infernum',
    display_name: 'Infernum, the Flamethrower',
    champion: 'Aphelios',
    skill: 'A',
    cost: '1',
    costtype: 'Moonlight per attack',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios\'"><img alt="Aphelios\'" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios\'</a></span></span> basic attacks will hit all enemies in its trajectory, dealing increased damage to the main target and less damage to other targets. The attack will then spread into a cone behind his main target.',
      'While Infernum is the <span style="color: #7A6DFF; white-space:normal">main weapon</span>, his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> ability will be:',
    ],
    description: [
      {
        icon: '/wiki/images/Infernum.png',
        description:
          'Basic attacks with Infernum shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through. The fire bolt deals 110% AD physical damage to the primary target. Secondary targets hit by any bolt are dealt 82.5 / 110% (based on level) AD physical damage, reduced to 25.3 / 33% (based on level) AD against  minions.',
        descriptionHTML:
          'Basic attacks with <b>Infernum</b> shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through. The fire bolt deals <span style="color:orange; white-space:normal">110% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to the primary target. Secondary targets hit by any bolt are dealt <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="82.5;1" data-finish="110;9" data-bot_values="82.5;110" data-top_values="1;9" data-bot_key="%">82.<small>5</small> / 110% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, reduced to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25.3;1" data-finish="33;9" data-bot_values="25.3;33" data-top_values="1;9" data-bot_key="%">25.<small>3</small> / 33% (based on level)</span> AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Basic attacks with Infernum shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through',
            damagetype: 'None',
            values: 4,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'attacks with Infernum shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through',
            pre: 'Basic attacks with Infernum shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The fire bolt deals 110% AD physical damage to the primary target',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'AD physical damage to the primary targetfire bolt deals 110',
            pre: 'The fire bolt deals 110% AD physical damage to the primary target',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Secondary targets hit by any bolt are dealt 82.5 / 110% (based on level) AD physical damage, reduced to 25.3 / 33% (based on level) AD against  minions.',
            increasedStat: 'total_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'AD physical damage, reduced to 25.3 / 33%',
            pre: 'Secondary targets hit by any bolt are dealt 82.5 / 110%',
            post: 'AD physical damage, reduced to 25.3 / 33%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Critical strikes also apply to damage dealt to secondary targets and instead spray 6 missiles in a 50% wider cone that deals  critical damage.',
        descriptionHTML:
          '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> also apply to damage dealt to secondary targets and instead spray 6 missiles in a 50% wider cone that deals <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Critical strikes also apply to damage dealt to secondary targets and instead spray 6 missiles in a 50% wider cone that deals  critical damage.',
            damagetype: 'None',
            values: 6,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'wider cone that deals  critical damage.strikes also apply to damage dealt to secondary targets and instead spray 6 missiles in a 50',
            pre: 'Critical strikes also apply to damage dealt to secondary targets and instead spray 6 missiles in a 50% wider cone that deals  critical damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'default',
    spellshield: false,
    projectile: 'True',
    notes:
      '* <i>Infernum\'s</i> attack hit can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> by or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">missed</a></span> against the primary target.\n<ul><li><ul><li>This will not prevent the missile from dealing damage to secondary targets nor from splashing against additional targets behind the primary target. The damage cannot be dodged as or missed against a secondary target.</li></ul></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> bolts will use <i>Infernum\'s</i> projectiles when <b>Aphelios</b> attacks with <i>Infernum</i>.\n<ul><li>The bolts\' attacks shoot 3 missiles, increased to 5 missiles when they <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aphelios_Original_PassiveReload_Infernum_2.ogg   "Infernum."',
  },
  Crescendum: {
    name: 'Crescendum',
    display_name: 'Crescendum, the Chakram',
    champion: 'Aphelios',
    skill: 'A',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is increased on critical strike">600</span> <span style="color:orangered; white-space:normal">(+&nbsp;75 per 10% <b>bonus</b> attack speed)</span>',
    cost: '1',
    costtype: 'Moonlight per attack',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios"><img alt="Aphelios" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios</a></span></span> throws a chakram as his basic attack and he cannot attack again until it returns to him. Other abilities will create mirror chakrams that he gathers, and his basic attacks deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on how many mirror chakrams he holds.',
      'While Crescendum is the <span style="color: #7A6DFF; white-space:normal">main weapon</span>, his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> ability will be:',
    ],
    description: [
      {
        icon: '/wiki/images/Crescendum.png',
        description:
          'Basic attacks with Crescendum hurl the blade at the target, which lingers for 0.25 seconds before homing back to Aphelios. He is unable to declare basic attacks until he retrieves Crescendum, but the attack timer is reset once caught.',
        descriptionHTML:
          'Basic attacks with <b>Crescendum</b> hurl the blade at the target, which lingers for 0.<small>25</small> seconds before homing back to <b>Aphelios</b>. He is unable to declare basic attacks until he retrieves <b>Crescendum</b>, but the attack timer is reset <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This does not persist when swapping weapons.">once caught</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Crescendum_2.png',
        description:
          'Whenever Aphelios casts an ability that would require him to throw Crescendum, he instead fires a spectral Chakram at the target that similarly returns to him. Aphelios accumulates the Chakrams he catches, up to 20, which last for 5 seconds or until Crescendum is depleted of Moonlight. Attacks with Crescendum against  champions will refresh the duration of Chakrams.',
        descriptionHTML:
          'Whenever <b>Aphelios</b> casts an ability that would require him to throw <b>Crescendum</b>, he instead fires a spectral <i>Chakram</i> at the target that similarly returns to him. <b>Aphelios</b> accumulates the <i>Chakrams</i> he catches, up to 20, which last for 5 seconds or until <b>Crescendum</b> is depleted of <i>Moonlight</i>. Attacks with <b>Crescendum</b> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> will refresh the duration of <i>Chakrams</i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Aphelios accumulates the Chakrams he catches, up to 20, which last for 5 seconds or until Crescendum is depleted of Moonlight',
            damagetype: 'None',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'accumulates the Chakrams he catches, up to 20, which last for 5 seconds or until Crescendum is depleted of Moonlight',
            pre: 'Aphelios accumulates the Chakrams he catches, up to 20, which last for 5 seconds or until Crescendum is depleted of Moonlight',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Basic attacks with Crescendum are empowered to deal 0% − 138.5% (based on number of Chakrams) AD bonus physical damage and have a 10.67% wind up percentage, decreased to 6.67% when  critically striking. The bonus damage from Chakrams is affected by  critical strike modifiers.',
        descriptionHTML:
          'Basic attacks with <b>Crescendum</b> are empowered to deal <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="number of Chakrams" data-displayformula="Each Chakram grants less bonus damage than the last, starting at 15% and diminishing to 5% for 10+&nbsp;Chakrams." data-bot_values="0;15;28.5;40.5;51;60;67.5;73.5;78.5;83.5;88.5;93.5;98.5;103.5;108.5;113.5;118.5;123.5;128.5;133.5;138.5" data-top_values="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" data-bot_key="%">0% − 138.<small>5</small>% (based on number of Chakrams)</span> AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and have a 10.<small>67</small>% <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">wind up</a></span></i> percentage, decreased to 6.<small>67</small>% when <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span>. The <b>bonus</b> damage from <i>Chakrams</i> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'attack',
    projectile: 'True',
    notes:
      '* Accumulated <i>Chakrams</i> accompany <b>Crescendum</b> whenever <b>Aphelios</b> performs a basic attack. This is merely a visual representation of the increased damage, and the separate blades are not considered separate damage sources nor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>.\n<ul><li>All <i>Chakram</i> stacks are lost if the <b>Crescendum</b> projectile is destroyed (i.e <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>).</li>\n<li>At high attack speeds <b>Crescendum</b> will lower <b>Aphelios\'</b> total attack speed, even when right next to his target.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aphelios_Original_PassiveReload_Crescendum_3.ogg   "Crescendum."',
  },
  'Weapons of the Faithful': {
    name: 'Weapons of the Faithful',
    display_name: 'Weapons of the Faithful',
    champion: 'Aphelios',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'ApheliosQ_ClientTooltipWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      'The active effect of <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios\'"><img alt="Aphelios\'" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios\'</a></span></span> <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> ability varies based on his current <span style="color: #7A6DFF; white-space:normal">main weapon</span>.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Calibrum"><img alt="Calibrum" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Calibrum</a></span></span> - <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Moonshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Moonshot" title="Moonshot"><img alt="Moonshot" src="/wiki/images/Aphelios_Moonshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Moonshot" title="Aphelios/LoL">Moonshot</a></span></span>: Long range shot that marks its target for a long-range follow-up attack.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span> - <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Onslaught" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Onslaught" title="Onslaught"><img alt="Onslaught" src="/wiki/images/Aphelios_Onslaught.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Onslaught" title="Aphelios/LoL">Onslaught</a></span></span>: Gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span></span> while attacking a single enemy with both weapons.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span> - <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Binding Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Binding_Eclipse" title="Binding Eclipse"><img alt="Binding Eclipse" src="/wiki/images/Aphelios_Binding_Eclipse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Binding_Eclipse" title="Aphelios/LoL">Binding Eclipse</a></span></span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">Root</a></span> enemies who are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by this weapon.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span> - <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Duskwave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Duskwave" title="Duskwave"><img alt="Duskwave" src="/wiki/images/Aphelios_Duskwave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Duskwave" title="Aphelios/LoL">Duskwave</a></span></span>: Blast enemies in a cone and attack them with your <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span> - <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Sentry" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Sentry" title="Sentry"><img alt="Sentry" src="/wiki/images/Aphelios_Sentry.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Sentry" title="Aphelios/LoL">Sentry</a></span></span>: Deploy a sentry with your <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon that attacks nearby enemies.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Weapons_of_the_Faithful.png',
        description:
          "The active effect of Aphelios'  varies based on his current main weapon.",
        descriptionHTML:
          'The active effect of <b>Aphelios\'</b> <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> varies based on his current <span style="color: #7A6DFF; white-space:normal">main weapon</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'The individual actives do not share a cooldown.',
        descriptionHTML: 'The individual actives do not share a cooldown.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'N/A',
    affects: '',
    notes: '* No additional details.',
    video: 'Aphelios QVideo.ogv',
  },
  Moonshot: {
    name: 'Moonshot',
    display_name: 'Moonshot',
    champion: 'Aphelios',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'ApheliosQ_ClientTooltipWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1450',
    width: '120',
    speed: '1850',
    cast_time: '0.<small>4</small>',
    cost: '10 Moonlight + 60',
    costtype: 'Mana',
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="8;13" data-bot_values="10;9.67;9.33;9;8.67;8.33;8" data-top_values="1;3;5;7;9;11;13">10 − 8 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> fires a bolt of energy in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Moonshot.png',
        description:
          'Active: Aphelios fires a bolt of energy in the target direction that deals 60 − 160 (based on level) (+ 42% − 60% (based on level) bonus AD) (+ 100% AP) physical damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> fires a bolt of energy in the target direction that deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="60;1" data-finish="160;13" data-bot_values="60;76.67;93.33;110;126.67;143.33;160" data-top_values="1;3;5;7;9;11;13">60 − 160 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="42;1" data-finish="60;13" data-bot_values="42;45;48;51;54;57;60" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">42% − 60% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Aphelios fires a bolt of energy in the target direction that deals 60 − 160 (based on level) (+ 42% − 60% (based on level) bonus AD) (+ 100% AP) physical damage to the first enemy hit.',
            damagetype: 'Physical',
            values: [
              60, 65.88, 71.76, 77.65, 83.53, 89.41, 95.29, 101.18, 107.06,
              112.94, 118.82, 124.71, 130.59, 136.47, 142.35, 148.24, 154.12,
              160,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'physical damage to the first enemy hit.',
            pre: 'Aphelios fires a bolt of energy in the target direction that deals 60 − 160',
            post: 'physical damage to the first enemy hit.',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 42% − 60%',
                post: 'bonus AD',
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
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Moonshot\'s</i> name is modified based on <b>Aphelios\'</b> <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon:\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Resurgent Moonshot"><img alt="Resurgent Moonshot" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Resurgent Moonshot</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Binding Moonshot"><img alt="Binding Moonshot" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Binding Moonshot</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Incendiary Moonshot"><img alt="Incendiary Moonshot" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Incendiary Moonshot</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Arcing Moonshot"><img alt="Arcing Moonshot" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Arcing Moonshot</a></span></span></li></ul></li></ul>',
  },
  Onslaught: {
    name: 'Onslaught',
    display_name: 'Onslaught',
    champion: 'Aphelios',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'ApheliosQ_ClientTooltipWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '550',
    cast_time: 'none',
    cost: '10 Moonlight + 60',
    costtype: 'Mana',
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="8;13" data-bot_values="10;9.67;9.33;9;8.67;8.33;8" data-top_values="1;3;5;7;9;11;13">10 − 8 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> gains <span style="color: #F5EE99; white-space:normal"><b>bonus</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span></span> and quickly attacks a nearby enemy with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span> and his current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>. The number of attacks is increased based on <span style="color:orangered; white-space:normal">his <b>bonus</b> attack speed</span>.',
      '<b>Aphelios</b> can move during <i>Onslaught</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Onslaught.png',
        description:
          'Active: Aphelios enters an onslaught for 1.75 seconds, gaining  20% (+ 10% per 100 AP) bonus movement speed and automatically performing up to 6 (+ 2 per 100% bonus attack speed) attacks over the duration against the nearest  visible enemy, prioritizing enemy  champions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> enters an onslaught for 1.<small>75</small> seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> and automatically performing up to 6 <span style="color:orangered; white-space:normal">(+&nbsp;2 per 100% <b>bonus</b> attack speed)</span> attacks over the duration against the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy, prioritizing enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Aphelios enters an onslaught for 1.75 seconds, gaining  20% (+ 10% per 100 AP) bonus movement speed and automatically performing up to 6 (+ 2 per 100% bonus attack speed) attacks over the duration against the nearest  visible enemy, prioritizing enemy  champions.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed and automatically performing up to 6',
            pre: 'Aphelios enters an onslaught for 1.75 seconds, gaining  20%',
            post: 'bonus movement speed and automatically performing up to 6',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 10% per 100 AP',
              },
              {
                values: 2,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus attack speedper 100',
                pre: '+ 2 per 100% bonus attack speed',
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
          'Attacks alternate between Severum and his current off-hand weapon, each dealing 10 − 40 (based on level) (+ 20% − 35% (based on level) bonus AD) physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness.',
        descriptionHTML:
          'Attacks alternate between <i>Severum</i> and his current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, each dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="40;13" data-bot_values="10;15;20;25;30;35;40" data-top_values="1;3;5;7;9;11;13">10 − 40 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;1" data-finish="35;13" data-bot_values="20;22.5;25;27.5;30;32.5;35" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">20% − 35% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers, and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> damage at 25% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Attacks alternate between Severum and his current off-hand weapon, each dealing 10 − 40 (based on level) (+ 20% − 35% (based on level) bonus AD) physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness.',
            damagetype: 'Physical',
            values: [
              10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
              27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
            ],
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              'physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness.',
            pre: 'Attacks alternate between Severum and his current off-hand weapon, each dealing 10 − 40',
            post: 'physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness.',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% − 35%',
                post: 'bonus AD',
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
          'Aphelios cannot cast  Phase nor  Moonlight Vigil during Onslaught, but he is still able to move. He cannot perform attacks while unable to declare basic attacks.',
        descriptionHTML:
          '<i><b>Aphelios</b> cannot cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Phase" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Phase" title="Phase"><img alt="Phase" src="/wiki/images/Aphelios_Phase.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Phase" title="Aphelios/LoL">Phase</a></span></span> nor <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Moonlight Vigil" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Moonlight Vigil"><img alt="Moonlight Vigil" src="/wiki/images/Aphelios_Moonlight_Vigil.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Aphelios/LoL">Moonlight Vigil</a></span></span> during Onslaught, but he is still able to move. He cannot perform attacks while unable to declare basic attacks.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'attack',
    projectile: 'Special',
    callforhelp: 'true',
    notes:
      '* <i>Onslaught</i> goes on cooldown after the effect ends.\n<ul><li><b>Severum\'s</b> attacks are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">intercepted</a></span>, but the attacks from the <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon are during <i>Onslaught</i>.</li>\n<li><b>Aphelios</b> will also not perform the attacks while channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>.</li>\n<li>If <b>Aphelios</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunted</a></span>, he will still attack the nearest enemy.</li>\n<li>During <i>Onslaught</i>, <b>Aphelios\' </b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to 410&nbsp;」</span><span class="flipText2">「&nbsp;by 140&nbsp;」</span></span>and his attack commands instead issue movement commands to walk into the respective range of his target.</li>\n<li><i>Onslaught\'s</i> name is modified based on <b>Aphelios\' </b> <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon:\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Precision Onslaught"><img alt="Precision Onslaught" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Precision Onslaught</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Binding Onslaught"><img alt="Binding Onslaught" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Binding Onslaught</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Incendiary Onslaught"><img alt="Incendiary Onslaught" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Incendiary Onslaught</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Arcing Onslaught"><img alt="Arcing Onslaught" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Arcing Onslaught</a></span></span></li></ul></li>\n<li><i>Onslaught\'s</i> attacks stack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Energized"><a href="/wiki/Named_item_effect#Energized" title="Named item effect#Energized"><img alt="Kircheis Shard item.png" src="/wiki/images/Kircheis_Shard_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a></span>, but do not apply any other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span> will not deal damage if blocked by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span>, but the stacks will still be gained.</li>\n<li>Cosmetically, the <i>Moonlight</i> cost is consumed through the duration.</li></ul>',
  },
  'Binding Eclipse': {
    name: 'Binding Eclipse',
    display_name: 'Binding Eclipse',
    champion: 'Aphelios',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'ApheliosQ_ClientTooltipWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: 'Global',
    cast_time: '0.<small>3</small>',
    cost: '10 Moonlight + 60',
    costtype: 'Mana',
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="12;1" data-finish="10;13" data-bot_values="12;11.67;11.33;11;10.67;10.33;10" data-top_values="1;3;5;7;9;11;13">12 − 10 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> all targets that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Binding_Eclipse.png',
        description:
          "Gravitum - Active: Aphelios expunges all enemies with Gravitum's  slow debuff, dealing 50 − 110 (based on level) (+ 26% − 35% (based on level) bonus AD) (+ 70% AP) magic damage and  rooting them for 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span> - Active:</b></span> <b>Aphelios</b> expunges all enemies with <i>Gravitum\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> debuff, dealing <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;1" data-finish="110;13" data-bot_values="50;60;70;80;90;100;110" data-top_values="1;3;5;7;9;11;13">50 − 110 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="26;1" data-finish="35;13" data-bot_values="26;27.5;29;30.5;32;33.5;35" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">26% − 35% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Gravitum - Active:',
            raw: "Aphelios expunges all enemies with Gravitum's  slow debuff, dealing 50 − 110 (based on level) (+ 26% − 35% (based on level) bonus AD) (+ 70% AP) magic damage and  rooting them for 1 second.",
            damagetype: 'Magic',
            values: [
              50, 53.53, 57.06, 60.59, 64.12, 67.65, 71.18, 74.71, 78.24, 81.76,
              85.29, 88.82, 92.35, 95.88, 99.41, 102.94, 106.47, 110,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage and  rooting them for 1 second.',
            pre: "Aphelios expunges all enemies with Gravitum's  slow debuff, dealing 50 − 110",
            post: 'magic damage and  rooting them for 1 second.',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 26% − 35%',
                post: 'bonus AD',
              },
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
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Binding Eclipse also empowers in-flight Gravitum projectiles to instantly affect their targets upon applying the slow successively.',
        descriptionHTML:
          '<i>Binding Eclipse also empowers in-flight Gravitum projectiles to instantly affect their targets upon applying the slow successively.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spellaoe',
    spellshield: true,
    notes:
      '* No compensations are made if <i>Binding Eclipse</i> is used to empower in-flight <i>Gravitum</i> projectiles that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroyed</a></span> or have the slow application negated by any means, wasting the effect in the process.\n<ul><li><i>Binding Eclipse</i> cannot expunge enemies affected by <i>Gravitum</i> that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><i>Binding Eclipse</i> cannot be cast without a marked target.</li></ul>',
  },
  Duskwave: {
    name: 'Duskwave',
    display_name: 'Duskwave',
    champion: 'Aphelios',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'ApheliosQ_ClientTooltipWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '650',
    angle: '40°',
    cast_time: '0.<small>4</small>',
    cost: '10 Moonlight + 60',
    costtype: 'Mana',
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="6;13" data-bot_values="9;8.5;8;7.5;7;6.5;6" data-top_values="1;3;5;7;9;11;13">9 − 6 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> unleases a wave of energy in a cone, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and locking on to each of them, basic attacking them after a delay.',
    ],
    description: [
      {
        icon: '/wiki/images/Duskwave.png',
        description:
          'Active: Aphelios unleashes a wave of energy in a cone in the target direction, dealing 25 − 65 (based on level) (+ 56% − 80% (based on level) bonus AD) (+ 70% AP) physical damage to all enemies hit and locking onto each of them. After 0.25 seconds, Aphelios then fires a volley of attacks at each locked-on target from his current off-hand weapon, dealing 100% AD physical damage and applying  on-hit effects at 100% effectiveness. The damage is affected by  critical strike modifiers. There is no  range limit for locked-on targets.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> unleashes a wave of energy in a cone in the target direction, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;1" data-finish="65;13" data-bot_values="25;31.67;38.33;45;51.67;58.33;65" data-top_values="1;3;5;7;9;11;13">25 − 65 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="56;1" data-finish="80;13" data-bot_values="56;60;64;68;72;76;80" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">56% − 80% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies hit and locking onto each of them. After 0.<small>25</small> seconds, <b>Aphelios</b> then fires a volley of attacks at each locked-on target from his current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness. The damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers. There is no <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> limit for locked-on targets.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Aphelios unleashes a wave of energy in a cone in the target direction, dealing 25 − 65 (based on level) (+ 56% − 80% (based on level) bonus AD) (+ 70% AP) physical damage to all enemies hit and locking onto each of them',
            damagetype: 'Physical',
            values: [
              25, 27.35, 29.71, 32.06, 34.41, 36.76, 39.12, 41.47, 43.82, 46.18,
              48.53, 50.88, 53.24, 55.59, 57.94, 60.29, 62.65, 65,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'physical damage to all enemies hit and locking onto each of them',
            pre: 'Aphelios unleashes a wave of energy in a cone in the target direction, dealing 25 − 65',
            post: 'physical damage to all enemies hit and locking onto each of them',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 56% − 80%',
                post: 'bonus AD',
              },
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
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'true',
    notes:
      '* The volley applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> and the follow up attacks from the <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon deal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li>The hitbox also includes a very small portion behind <b>Aphelios\'</b> character model.</li>\n<li><i>Duskwave\'s</i> name is modified based on <b>Aphelios\'</b> <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon:\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Precision Duskwave"><img alt="Precision Duskwave" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Precision Duskwave</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Resurgent Duskwave"><img alt="Resurgent Duskwave" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Resurgent Duskwave</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Binding Duskwave"><img alt="Binding Duskwave" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Binding Duskwave</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Arcing Duskwave"><img alt="Arcing Duskwave" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Arcing Duskwave</a></span></span></li></ul></li>\n<li><b>Aphelios</b> is locked out of declaring attacks until the volley of attacks have been resolved.</li>\n<li>The automatic attacks do not trigger <b>any</b> <a href="/wiki/On-attack_effects" class="mw-redirect" title="On-attack effects">on-attack effects</a>.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Pix, Faerie Companion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Pix"><img alt="Pix" src="/wiki/images/Lulu_Pix%2C_Faerie_Companion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Pix,_Faerie_Companion" title="Lulu/LoL">Pix</a></span></span> does not increase the damage of the volley.</li></ul></li>\n<li>The volley of attacks won\'t deal any damage, if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, or if <b>Aphelios</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul>',
  },
  Sentry: {
    name: 'Sentry',
    display_name: 'Sentry',
    champion: 'Aphelios',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'ApheliosQ_ClientTooltipWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '475',
    effect_radius: '500',
    cast_time: '0.<small>25</small>',
    cost: '10 Moonlight + 60',
    costtype: 'Mana',
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="6;13" data-bot_values="9;8.5;8;7.5;7;6.5;6" data-top_values="1;3;5;7;9;11;13">9 − 6 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> deploys a lunar sentry that gains a copy of his <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon and attacks with it, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Sentry.png',
        description:
          'Active: Aphelios deploys a lunar sentry at the target location that arms after 0.35 seconds, lasting for up to 20 seconds, during which it is inactive and  untargetable. The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable. Sentries have 6 health and take 3 damage per  ranged basic attack and 4 damage per hit by abilities.  Turret attacks destroy sentries instantly.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> deploys a lunar sentry at the target location that arms after 0.<small>35</small> seconds, lasting for up to 20 seconds, during which it is inactive and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>. The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable. Sentries have <span style="color: #1F995C; white-space:normal">6 health</span> and take 3 damage per <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> basic attack and 4 damage per hit by abilities. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turret</a></span> attacks destroy sentries instantly.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable',
            pre: 'The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable',
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: 'Sentries have 6 health and take 3 damage per  ranged basic attack and 4 damage per hit by abilities',
            healType: 'BonusHealth',
            values: 6,
            units: 'total_ad',
            unitsText:
              'have 6 health and take 3 damage per  ranged basic attack and 4 damage per hit by abilities',
            pre: 'Sentries have 6 health and take 3 damage per  ranged basic attack and 4 damage per hit by abilities',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The sentry grants  sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios'  current off-hand weapon, dealing 31 − 100 (based on level) (+ 40% − 60% (based on level) bonus AD) (+ 50% AP) physical damage per hit. The sentry can  critically strike and benefits from both Aphelios'  attack speed and  critical strike chance at 100% effectiveness.",
        descriptionHTML:
          'The sentry grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of <b>Aphelios\' </b> current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="31;1" data-finish="100;13" data-bot_values="31;42.5;54;65.5;77;88.5;100" data-top_values="1;3;5;7;9;11;13">31 − 100 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;1" data-finish="60;13" data-bot_values="40;43.33;46.67;50;53.33;56.67;60" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">40% − 60% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> per hit. The sentry can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> and benefits from both <b>Aphelios\'</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal">critical strike chance</span></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "The sentry grants  sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios'  current off-hand weapon, dealing 31 − 100 (based on level) (+ 40% − 60% (based on level) bonus AD) (+ 50% AP) physical damage per hit",
            values: [
              31, 35.06, 39.12, 43.18, 47.24, 51.29, 55.35, 59.41, 63.47, 67.53,
              71.59, 75.65, 79.71, 83.76, 87.82, 91.88, 95.94, 100,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'physical damage per hit',
            pre: "The sentry grants  sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios'  current off-hand weapon, dealing 31 − 100",
            post: 'physical damage per hit',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40% − 60%',
                post: 'bonus AD',
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
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "The sentry can  critically strike and benefits from both Aphelios'  attack speed and  critical strike chance at 100% effectiveness.",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              "effectiveness.sentry can  critically strike and benefits from both Aphelios'  attack speed and  critical strike chance at 100",
            pre: "The sentry can  critically strike and benefits from both Aphelios'  attack speed and  critical strike chance at 100% effectiveness.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'See Pets for more details about the sentry. Sentry will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>See <a href="/wiki/Aphelios/LoL#Pets" title="Aphelios/LoL">Pets</a> for more details about the sentry. Sentry will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'spell',
    projectile: 'Special',
    notes:
      '* <i>Sentry\'s</i> name is modified based on <b>Aphelios\'</b> <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon:\n<ul><li><ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Precision Sentry"><img alt="Precision Sentry" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Precision Sentry</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Resurgent Sentry"><img alt="Resurgent Sentry" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Resurgent Sentry</a></span></span>\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">Heals</a></span> <b>Aphelios</b> for any damage it deals.</li>\n<li>Attacks cannot be intercepted by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.</li></ul></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Binding Sentry"><img alt="Binding Sentry" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Binding Sentry</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Incendiary Sentry"><img alt="Incendiary Sentry" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Incendiary Sentry</a></span></span></li></ul></li>\n<li>The <i>Sentry</i> will stop upon colliding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span>. It will be deployed in front of the wall.</li>\n<li>The <i>Sentry\'s</i> attacks can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, but not missed from being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul>',
  },
  Phase: {
    name: 'Phase',
    display_name: 'Phase',
    champion: 'Aphelios',
    skill: 'W',
    maxrank: 6,
    image: {
      full: 'ApheliosW.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'None',
    static: '0.<small>8</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios"><img alt="Aphelios" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios</a></span></span> switches between his <span style="color: #7A6DFF; white-space:normal">main weapon</span> and <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon.',
    ],
    description: [
      {
        icon: '/wiki/images/Phase.png',
        description:
          'Active: Aphelios switches between his main weapon and off-hand weapon over 0.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> switches between his <span style="color: #7A6DFF; white-space:normal">main weapon</span> and <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon over 0.<small>25</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: '',
    notes:
      '* Switching does not interrupt <b>any</b> commands <b>Aphelios</b> was issued before or during <i>Phase</i>.',
    video: 'Aphelios WVideo.ogv',
  },
  'Weapon Queue System': {
    name: 'Weapon Queue System',
    display_name: 'Weapon Queue System',
    champion: 'Aphelios',
    skill: 'E',
    maxrank: 6,
    image: {
      full: 'ApheliosE_ClientTooltipWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      'The icon of this ability reflects the next weapon that is the next in <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios\'"><img alt="Aphelios\'" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios\'</a></span></span> weapon queue.',
    ],
    description: [
      {
        description:
          'The icon of this ability reflects the next weapon that is in reserve.',
        descriptionHTML:
          'The icon of this ability reflects the next weapon that is in reserve.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Active: Aphelios receives a text prompt of the weapon Alune will create next.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> receives a text prompt of the weapon <b>Alune</b> will create next.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: '',
    notes:
      '* This ability also includes the icon of the <span style="color: #E34D4C; white-space:normal">off-hand</span>.',
  },
  'Moonlight Vigil': {
    name: 'Moonlight Vigil',
    display_name: 'Moonlight Vigil',
    champion: 'Aphelios',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ApheliosR.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1300',
    effect_radius: '300',
    speed: '1000',
    cast_time: '0.<small>6</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="120;6" data-finish="100;16" data-bot_values="120;110;100" data-top_values="6;11;16">120 / 110 / 100 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL" title="Aphelios"><img alt="Aphelios" src="/wiki/images/Aphelios_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL" title="Aphelios/LoL">Aphelios</a></span></span> fires a concentrated blast of moonlight that explodes upon hitting an enemy champion, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy champions in the area.',
      'Then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic attacks</a></span> rain from the sky to the targets, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying unique effects of his <span style="color: #7A6DFF; white-space:normal">main weapon</span>.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Calibrum"><img alt="Calibrum" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Calibrum</a></span></span>: Applies an empowered mark on all targets.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span>: The initial blast <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Aphelios</b>, and so do the attacks.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span>: An empowered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> applied on all targets.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span>: The initial blast deals increased damage, and the attacks splash on each target.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span>: <b>Aphelios</b> gains more mirror chakrams with the more targets hit with the initial blast.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Moonlight_Vigil.png',
        description:
          'Active: Aphelios casts forth a lunar spotlight in the target direction that briefly grants  sight of the area along its path and stops upon illuminating an enemy  champion. Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225 (based on level) (+ 20% bonus AD) (+ 100% AP) physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> casts forth a lunar spotlight in the target direction that briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area along its path and stops upon illuminating an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. <b>Alune</b> smites the area centered on the illuminated target, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="125;6" data-finish="225;16" data-bot_values="125;175;225" data-top_values="6;11;16">125 / 175 / 225 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy champions struck and locking-on to each target hit, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225 (based on level) (+ 20% bonus AD) (+ 100% AP) physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds.',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds.',
            pre: 'Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225',
            post: 'physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds.',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
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
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "After 0.3 seconds of the illumination, attacks based on Aphelios'  current main weapon will launch from the sky against each locked-on target, dealing 100% AD physical damage and applying  on-hit effects at 100% effectiveness. These attacks can  critically strike for (20% +  35%) AD bonus physical damage. There is no  range limit for locked-on targets.\n Calibrum: Applies an empowered mark that deals 50 / 80 / 110 (based on level) bonus physical damage per mark consumed.\n Severum:  Heals Aphelios for 250 / 350 / 450 (based on level) if at least one enemy champion is hit.\n Gravitum: Increases the initial  slow to 99% and empowers  Binding Eclipse to  root targets affected by the enhanced slow for 1.35 seconds.\n Infernum: Deals 50 / 100 / 150 (based on level) (+ 25% bonus AD) bonus physical damage on the initial blast. Attacks splash in a 400 radius instead of a cone, dealing「 90% of that damage. 」「 45 / 90 / 135 (based on level) (+ 22.5% bonus AD) physical damage. 」Enemy champions will take damage from overlapping areas.\n Crescendum: Generates 5 additional spectral Chakrams that return to Aphelios from the first enemy champion hit, for a total of 6, on top of those from other targets hit.",
        descriptionHTML:
          'After 0.<small>3</small> seconds of the illumination, attacks based on <b>Aphelios\' </b> current <span style="color: #7A6DFF; white-space:normal">main weapon</span> will launch from the sky against each locked-on target, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness. These attacks can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(20%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>. There is no <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> limit for locked-on targets.\n<ul><li><span class="template_lc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Calibrum"><img alt="Calibrum" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Calibrum</a></span></span>:</b></span> Applies an empowered mark that deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;6" data-finish="110;16" data-bot_values="50;80;110" data-top_values="6;11;16">50 / 80 / 110 (based on level)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span></span> per <i>mark</i> consumed.</li></ul>\n<ul><li><span class="template_lc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span>:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">Heals</a></span> <b>Aphelios</b> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="250;6" data-finish="450;16" data-bot_values="250;350;450" data-top_values="6;11;16">250 / 350 / 450 (based on level)</span> if at least one enemy champion is hit.</li></ul>\n<ul><li><span class="template_lc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span>:</b></span> Increases the initial <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> to 99% and empowers <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Binding Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Binding_Eclipse" title="Binding Eclipse"><img alt="Binding Eclipse" src="/wiki/images/Aphelios_Binding_Eclipse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Binding_Eclipse" title="Aphelios/LoL">Binding Eclipse</a></span></span></i> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> targets affected by the enhanced slow for 1.<small>35</small> seconds.</li></ul>\n<ul><li><span class="template_lc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span>:</b></span> Deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;6" data-finish="150;16" data-bot_values="50;100;150" data-top_values="6;11;16">50 / 100 / 150 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> on the initial blast. Attacks splash in a 400 radius instead of a cone, dealing<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;90% of that damage.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;6" data-finish="135;16" data-bot_values="45;90;135" data-top_values="6;11;16">45 / 90 / 135 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;22.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.&nbsp;」</span></span>Enemy champions will take damage from overlapping areas.</li></ul>\n<ul><li><span class="template_lc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span>:</b></span> Generates 5 additional spectral <i>Chakrams</i> that return to <b>Aphelios</b> from the first enemy champion hit, for a total of 6, on top of those from other targets hit.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'These attacks can  critically strike for (20% +  35%) AD bonus physical damage',
            damagetype: 'Physical',
            values: 0,
            units: 'bonus_ad',
            unitsText: 'AD bonus physical damage',
            pre: 'These attacks can  critically strike for',
            post: 'AD bonus physical damage',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '20% +  35%',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'There is no  range limit for locked-on targets.\n Calibrum:',
            raw: 'Applies an empowered mark that deals 50 / 80 / 110 (based on level) bonus physical damage per mark consumed.\n Severum:  Heals Aphelios for 250 / 350 / 450 (based on level) if at least one enemy champion is hit.\n Gravitum: Increases the initial  slow to 99% and empowers  Binding Eclipse to  root targets affected by the enhanced slow for 1.35 seconds.\n Infernum: Deals 50 / 100 / 150 (based on level) (+ 25% bonus AD) bonus physical damage on the initial blast',
            healType: 'PhysicalVamp',
            values: [],
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              'bonus physical damage per mark consumed.\n Severum:  Heals Aphelios for 250 / 350 / 450',
            pre: 'Applies an empowered mark that deals 50 / 80 / 110',
            post: 'bonus physical damage per mark consumed.\n Severum:  Heals Aphelios for 250 / 350 / 450',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 25% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Attacks splash in a 400 radius instead of a cone, dealing「 90% of that damage. 」「 45 / 90 / 135 (based on level) (+ 22.5% bonus AD) physical damage. 」Enemy champions will take damage from overlapping areas.\n Crescendum:',
            raw: 'Generates 5 additional spectral Chakrams that return to Aphelios from the first enemy champion hit, for a total of 6, on top of those from other targets hit.',
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText:
              '5 additional spectral Chakrams that return to Aphelios from the first enemy champion hit, for a total of 6, on top of those from other targets hit.',
            pre: 'Generates 5 additional spectral Chakrams that return to Aphelios from the first enemy champion hit, for a total of 6, on top of those from other targets hit.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'Special',
    callforhelp: 'true',
    notes:
      '* The basic attacks always count as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> unless <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span> is being used. The lunar beam, however, may always be intercepted regardless of which weapon is in play as the main weapon.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> blocks the <i>Moonlight Vigil\'s</i> initial detonation damage but does not prevent the attacks from locking-on.</li>\n<li>The basic attacks from <i>Moonlight Vigil</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> independently from each other. Targets further away from the center of the blast are hit after a slightly longer delay. These attacks do not apply <a href="/wiki/On-attack_effects" class="mw-redirect" title="On-attack effects">on-attack effects</a>.</li>\n<li>Changing weapons while <i>Moonlight Vigil</i> is in flight does not change the effect it has when it hits.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li><i>Moonlight Vigil\'s</i> effect radius is centered around the location of the missile as it collides.</li>\n<li>With <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Calibrum"><img alt="Calibrum" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Calibrum</a></span></span>, the extra damage from consuming the mark is a bonus damage on top of <i>Calibrum\'s </i> normal mark consumption damage.</li>\n<li>With <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span>, 14 fire bolts splash from each target hit (18 for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span>). This does not occur if the initial damage of <i>Moonlight Vigil</i> <a href="/wiki/Kill" title="Kill">kills</a> the target.</li>\n<li>With <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span>,the splash attacks damage is also modified by Infernum attack secondary target damage amplifier, which means it only deals 70.125% (=82.5%*85%) of attack damage to secondary targets before level 9.</li>\n<li>With <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span>, 1 spectral chakram is gained for every target hit by the blast, meaning it is possible to gain up to 10 spectral chakrams with one use of <i>Moonlight Vigil</i> if it hits 5 enemy champions.</li>\n<li>With <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span>, the extra flat heal is given only once, not per target. However, all damage done by <i>Moonlight Vigil</i> with it also heals him from <i>Severum\'s </i> own passive effect.</li>\n<li>The locked-on attacks\' can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, but won\'t be prevented if <b>Aphelios</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.\n<ul><li>Preventing the attack also prevents the additional effect (e.g. marking them with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span> or granting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="spectral chakrams"><img alt="spectral chakrams" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">spectral chakrams</a></span></span>).</li></ul></li>\n<li><i>Moonlight Vigil</i> has different visual effects changed accordingly to each weapon. <i>This may vary depending on the <a href="/wiki/Skin" class="mw-redirect mw-disambig" title="Skin">skin</a>, this showcases the <b>default</b>:</i></li></ul>\n<div id="gallery-1" hash="aedb56d30e2f29f2f67eb5073142a1d5" data-seq-no="1" class="wikia-gallery wikia-gallery-caption-below wikia-gallery-position-left wikia-gallery-spacing-medium wikia-gallery-border-small wikia-gallery-captions-left wikia-gallery-caption-size-medium"><div class="wikia-gallery-item" style="width:102px; "><div class="thumb" style="height:102px;"><div class="gallery-image-wrapper accent" id="Moonlight_Vigil_-Calibrum-_screenshot-png" style="position: relative; height:100px; width:83px;"><a class="image lightbox" href="/wiki/File:Moonlight_Vigil_(Calibrum)_screenshot.png" title="Moonlight Vigil (Calibrum) screenshot.png (237 KB)" style="height:100px; width:83px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/9/9e/Moonlight_Vigil_%28Calibrum%29_screenshot.png/revision/latest/scale-to-width-down/83?cb=20200215173038" title="Moonlight Vigil (Calibrum) screenshot.png (237 KB)" class="thumbimage" alt="Moonlight Vigil (Calibrum) screenshot" data-image-name="Moonlight Vigil (Calibrum) screenshot.png" data-image-key="Moonlight_Vigil_%28Calibrum%29_screenshot.png" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Calibrum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Calibrum&quot; title=&quot;Calibrum&quot;&amp;gt;&amp;lt;img alt=&quot;Calibrum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Calibrum.png&quot; data-image-key=&quot;Aphelios_Calibrum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/0/00/Aphelios_Calibrum.png/revision/latest/scale-to-width-down/20?cb=20191213185839&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></noscript><img style="" src="/wiki/images/Moonlight_Vigil_%28Calibrum%29_screenshot.png" title="Moonlight Vigil (Calibrum) screenshot.png (237 KB)" class="thumbimage lazyload" alt="Moonlight Vigil (Calibrum) screenshot" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Calibrum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Calibrum&quot; title=&quot;Calibrum&quot;&amp;gt;&amp;lt;img alt=&quot;Calibrum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Calibrum.png&quot; data-image-key=&quot;Aphelios_Calibrum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/0/00/Aphelios_Calibrum.png/revision/latest/scale-to-width-down/20?cb=20191213185839&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></a></div></div><div class="lightbox-caption" style="width:100px;"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Calibrum"><img alt="Calibrum" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Calibrum</a></span></span></b></div></div><div class="wikia-gallery-item" style="width:102px; "><div class="thumb" style="height:102px;"><div class="gallery-image-wrapper accent" id="Moonlight_Vigil_-Severum-_screenshot-png" style="position: relative; height:100px; width:93px;"><a class="image lightbox" href="/wiki/File:Moonlight_Vigil_(Severum)_screenshot.png" title="Moonlight Vigil (Severum) screenshot.png (209 KB)" style="height:100px; width:93px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Moonlight_Vigil_%28Severum%29_screenshot.png/revision/latest/scale-to-width-down/93?cb=20200215173240" title="Moonlight Vigil (Severum) screenshot.png (209 KB)" class="thumbimage" alt="Moonlight Vigil (Severum) screenshot" data-image-name="Moonlight Vigil (Severum) screenshot.png" data-image-key="Moonlight_Vigil_%28Severum%29_screenshot.png" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Severum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Severum&quot; title=&quot;Severum&quot;&amp;gt;&amp;lt;img alt=&quot;Severum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Severum.png&quot; data-image-key=&quot;Aphelios_Severum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/2/2a/Aphelios_Severum.png/revision/latest/scale-to-width-down/20?cb=20191213190135&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></noscript><img style="" src="/wiki/images/Moonlight_Vigil_%28Severum%29_screenshot.png" title="Moonlight Vigil (Severum) screenshot.png (209 KB)" class="thumbimage lazyload" alt="Moonlight Vigil (Severum) screenshot" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Severum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Severum&quot; title=&quot;Severum&quot;&amp;gt;&amp;lt;img alt=&quot;Severum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Severum.png&quot; data-image-key=&quot;Aphelios_Severum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/2/2a/Aphelios_Severum.png/revision/latest/scale-to-width-down/20?cb=20191213190135&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></a></div></div><div class="lightbox-caption" style="width:100px;"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span></b></div></div><div class="wikia-gallery-item" style="width:102px; "><div class="thumb" style="height:102px;"><div class="gallery-image-wrapper accent" id="Moonlight_Vigil_-Gravitum-_screenshot-png" style="position: relative; height:99px; width:92px; top:0.5px;"><a class="image lightbox" href="/wiki/File:Moonlight_Vigil_(Gravitum)_screenshot.png" title="Moonlight Vigil (Gravitum) screenshot.png (249 KB)" style="height:99px; width:92px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/1/1a/Moonlight_Vigil_%28Gravitum%29_screenshot.png/revision/latest/scale-to-width-down/93?cb=20200215173319" title="Moonlight Vigil (Gravitum) screenshot.png (249 KB)" class="thumbimage" alt="Moonlight Vigil (Gravitum) screenshot" data-image-name="Moonlight Vigil (Gravitum) screenshot.png" data-image-key="Moonlight_Vigil_%28Gravitum%29_screenshot.png" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Gravitum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Gravitum&quot; title=&quot;Gravitum&quot;&amp;gt;&amp;lt;img alt=&quot;Gravitum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Gravitum.png&quot; data-image-key=&quot;Aphelios_Gravitum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Aphelios_Gravitum.png/revision/latest/scale-to-width-down/20?cb=20191213190004&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></noscript><img style="" src="/wiki/images/Moonlight_Vigil_%28Gravitum%29_screenshot.png" title="Moonlight Vigil (Gravitum) screenshot.png (249 KB)" class="thumbimage lazyload" alt="Moonlight Vigil (Gravitum) screenshot" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Gravitum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Gravitum&quot; title=&quot;Gravitum&quot;&amp;gt;&amp;lt;img alt=&quot;Gravitum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Gravitum.png&quot; data-image-key=&quot;Aphelios_Gravitum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Aphelios_Gravitum.png/revision/latest/scale-to-width-down/20?cb=20191213190004&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></a></div></div><div class="lightbox-caption" style="width:100px;"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span></b></div></div><div class="wikia-gallery-item" style="width:102px; "><div class="thumb" style="height:102px;"><div class="gallery-image-wrapper accent" id="Moonlight_Vigil_-Infernum-_screenshot-png" style="position: relative; height:100px; width:95px;"><a class="image lightbox" href="/wiki/File:Moonlight_Vigil_(Infernum)_screenshot.png" title="Moonlight Vigil (Infernum) screenshot.png (278 KB)" style="height:100px; width:95px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Moonlight_Vigil_%28Infernum%29_screenshot.png/revision/latest/scale-to-width-down/95?cb=20200215173350" title="Moonlight Vigil (Infernum) screenshot.png (278 KB)" class="thumbimage" alt="Moonlight Vigil (Infernum) screenshot" data-image-name="Moonlight Vigil (Infernum) screenshot.png" data-image-key="Moonlight_Vigil_%28Infernum%29_screenshot.png" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Infernum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Infernum&quot; title=&quot;Infernum&quot;&amp;gt;&amp;lt;img alt=&quot;Infernum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Infernum.png&quot; data-image-key=&quot;Aphelios_Infernum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Aphelios_Infernum.png/revision/latest/scale-to-width-down/20?cb=20191213190016&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></noscript><img style="" src="/wiki/images/Moonlight_Vigil_%28Infernum%29_screenshot.png" title="Moonlight Vigil (Infernum) screenshot.png (278 KB)" class="thumbimage lazyload" alt="Moonlight Vigil (Infernum) screenshot" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Infernum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Infernum&quot; title=&quot;Infernum&quot;&amp;gt;&amp;lt;img alt=&quot;Infernum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Infernum.png&quot; data-image-key=&quot;Aphelios_Infernum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Aphelios_Infernum.png/revision/latest/scale-to-width-down/20?cb=20191213190016&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></a></div></div><div class="lightbox-caption" style="width:100px;"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span></b></div></div><div class="wikia-gallery-item" style="width:102px; "><div class="thumb" style="height:102px;"><div class="gallery-image-wrapper accent" id="Moonlight_Vigil_-Crescendum-_screenshot-png" style="position: relative; height:99px; width:86px; top:0.5px;"><a class="image lightbox" href="/wiki/File:Moonlight_Vigil_(Crescendum)_screenshot.png" title="Moonlight Vigil (Crescendum) screenshot.png (227 KB)" style="height:99px; width:86px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/3/35/Moonlight_Vigil_%28Crescendum%29_screenshot.png/revision/latest/scale-to-width-down/87?cb=20200215173421" title="Moonlight Vigil (Crescendum) screenshot.png (227 KB)" class="thumbimage" alt="Moonlight Vigil (Crescendum) screenshot" data-image-name="Moonlight Vigil (Crescendum) screenshot.png" data-image-key="Moonlight_Vigil_%28Crescendum%29_screenshot.png" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Crescendum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Crescendum&quot; title=&quot;Crescendum&quot;&amp;gt;&amp;lt;img alt=&quot;Crescendum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Crescendum.png&quot; data-image-key=&quot;Aphelios_Crescendum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Aphelios_Crescendum.png/revision/latest/scale-to-width-down/20?cb=20191213185918&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></noscript><img style="" src="/wiki/images/Moonlight_Vigil_%28Crescendum%29_screenshot.png" title="Moonlight Vigil (Crescendum) screenshot.png (227 KB)" class="thumbimage lazyload" alt="Moonlight Vigil (Crescendum) screenshot" data-caption="<b><span class=&quot;inline-image label-after ability-icon&quot; style=&quot;display:inline;white-space:pre;&quot; data-param=&quot;&quot; data-champion=&quot;Aphelios&quot; data-ability=&quot;Crescendum&quot; data-game=&quot;lol&quot;><span class=&quot;border&quot; style=&quot;display:inline-block;position:relative;&quot; data-width=&quot;20&quot;>&amp;lt;a href=&quot;/wiki/Aphelios/LoL#Crescendum&quot; title=&quot;Crescendum&quot;&amp;gt;&amp;lt;img alt=&quot;Crescendum&quot; src=&quot;data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D&quot; decoding=&quot;async&quot; loading=&quot;lazy&quot; width=&quot;20&quot; height=&quot;20&quot; class=&quot;thumbborder lazyload&quot; data-image-name=&quot;Aphelios Crescendum.png&quot; data-image-key=&quot;Aphelios_Crescendum.png&quot; data-src=&quot;https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Aphelios_Crescendum.png/revision/latest/scale-to-width-down/20?cb=20191213185918&quot; /&amp;gt;&amp;lt;/a&amp;gt;</span> <span style=&quot;white-space:normal;&quot;></span></span></b>"></a></div></div><div class="lightbox-caption" style="width:100px;"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span></b></div></div></div>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aphelios_Original_R_1.ogg   "I am with you!"',
    video: 'Aphelios RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
