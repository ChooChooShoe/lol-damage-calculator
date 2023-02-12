import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Aphelios';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_The_Hitman_and_the_Seer.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Aphelios</b> has access to an arsenal of 5 <i>Moonstone Weapons</i>, created by his sister <b>Alune</b>. He equips two weapons at any one time, one as his <span style="color: #7A6DFF; white-space:normal">main weapon</span> and one as his <span style="color: #E34D4C; white-space:normal">off-hand</span>. Each weapon has a unique <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> and passive effect.',
    leveling: [],
  },
  {
    description:
      '<b>Aphelios</b> begins the game with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Calibrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Calibrum" title="Calibrum"><img alt="Calibrum" src="/wiki/images/Aphelios_Calibrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Calibrum" title="Aphelios/LoL">Calibrum</a></span></span> as his <span style="color: #7A6DFF; white-space:normal">main weapon</span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Severum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Severum" title="Severum"><img alt="Severum" src="/wiki/images/Aphelios_Severum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Severum" title="Aphelios/LoL">Severum</a></span></span> in his <span style="color: #E34D4C; white-space:normal">off-hand</span>, with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Infernum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Infernum" title="Infernum"><img alt="Infernum" src="/wiki/images/Aphelios_Infernum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Infernum" title="Aphelios/LoL">Infernum</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Crescendum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Crescendum" title="Crescendum"><img alt="Crescendum" src="/wiki/images/Aphelios_Crescendum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Crescendum" title="Aphelios/LoL">Crescendum</a></span></span> queued in reserve. The queue order can be rearranged based on weapon usage.',
    leveling: [],
  },
  {
    img: '/wiki/images/The_Hitman_and_the_Seer_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Moonlight:</b></span> Weapons spawn with 50 <i>Moonlight</i> for <a href="/wiki/Ammunition" title="Ammunition">ammunition</a>, which is consumed on basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> or to cast his <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Champion_ability" title="abilities"><img alt="abilities" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Champion_ability" title="Champion ability">abilities</a></span></span>. Abilities that cause <b>Aphelios</b> to attack do not cost additional <i>Moonlight</i> on top of their ability cost. Once his <span style="color: #7A6DFF; white-space:normal">main weapon</span> is exhausted of <i>Moonlight</i>, it is moved to the end of the queue and <b>Aphelios</b> assembles his next available weapon over 1 second to equip it from his reserve, with its <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> being placed on a 1.<small>5</small>-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> before that time. <b>Aphelios</b> cannot cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Phase" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Phase" title="Phase"><img alt="Phase" src="/wiki/images/Aphelios_Phase.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Phase" title="Aphelios/LoL">Phase</a></span></span> during the assembly.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Weapon Master:</b></span> <b>Aphelios</b> cannot improve his abilities with <a href="/wiki/Experience_(champion)" title="Experience (champion)">skill points</a>. He starts the game with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Phase" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Phase" title="Phase"><img alt="Phase" src="/wiki/images/Aphelios_Phase.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Phase" title="Aphelios/LoL">Phase</a></span></span> and gains access to <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Champion_ability" title="abilities"><img alt="abilities" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Champion_ability" title="Champion ability">abilities</a></span></span> at level 2 and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Moonlight Vigil" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Moonlight Vigil"><img alt="Moonlight Vigil" src="/wiki/images/Aphelios_Moonlight_Vigil.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Aphelios/LoL">Moonlight Vigil</a></span></span> at level 6, with the latter improving automatically at levels 11 and 16. Instead, <b>Aphelios</b> may spend his skill points to gain <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack damage</span></span>, <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span> or <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:tomato; white-space:normal">lethality</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '5 / 10 / 15 / 20 / 25 / 30',
        values: [5, 10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15 / 20 / 25 / 30',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '7.5 / 15 / 22.5 / 30 / 37.5 / 45%',
        values: [7.5, 15, 22.5, 30, 37.5, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.5 / 15 / 22.5 / 30 / 37.5 / 45%',
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
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Weapons_of_the_Faithful.png',
    description:
      'The active effect of <b>Aphelios\'</b> <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Q.png/revision/latest?cb=20170225193556" class="image"><img alt="Q.png" src="/wiki/images/Q.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> varies based on his current <span style="color: #7A6DFF; white-space:normal">main weapon</span>.',
    leveling: [],
  },
  {
    description: 'The individual actives do not share a cooldown.',
    leveling: [],
  },
];
const Aphelios1: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Calibrum.png',
    description:
      '<b>Aphelios</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;100 <b>bonus</b> attack range</span> while <b>Calibrum</b> is his <span style="color: #7A6DFF; white-space:normal">main weapon</span>. Enemies damaged by <b>Calibrum</b> through an ability are marked for 4.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for the duration. <b>Aphelios\' </b> next basic attack against a marked target uses the current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon and has <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1800 range</span>, increased missile speed, and a brief cast time that lasts shorter based on <b>Aphelios\' </b> proximity to the target.',
    leveling: [],
  },
  {
    description:
      'The empowered attack will consume the marks from all targets, dealing <span style="color: #FF8C34; white-space:normal">15</span> <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> to the main target for each mark consumed. If <b>Calibrum</b> is the current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, the <span style="color: #7A6DFF; white-space:normal">main weapon</span> is used for the attack instead.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'The empowered attack will consume the marks from all targets, dealing 15 (+ 20% bonus AD) bonus physical damage to the main target for each mark consumed',
        damagetype: 'Physical',
        values: 1,
        user: 'player',
        units: 'kindredMarks',
        unitsText:
          'bonus physical damage to the main target for each mark consumed',
        pre: 'The empowered attack will consume the marks from all targets, dealing 15',
        post: 'bonus physical damage to the main target for each mark consumed',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
          },
        ],
      },
    ],
  },
];
const Aphelios2: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Moonshot.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> fires a bolt of energy in the target direction that deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="60;1" data-finish="160;13" data-bot_values="60;76.67;93.33;110;126.67;143.33;160" data-top_values="1;3;5;7;9;11;13">60 − 160 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="42;1" data-finish="60;13" data-bot_values="42;45;48;51;54;57;60" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">42% − 60% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Aphelios fires a bolt of energy in the target direction that deals 60 − 160 (based on level) (+ 42% − 60% (based on level) bonus AD) (+ 100% AP) physical damage to the first enemy hit',
        damagetype: 'Physical',
        values: [
          60, 65.88, 71.76, 77.65, 83.53, 89.41, 95.29, 101.18, 107.06, 112.94,
          118.82, 124.71, 130.59, 136.47, 142.35, 148.24, 154.12, 160,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'physical damage to the first enemy hit',
        pre: 'Aphelios fires a bolt of energy in the target direction that deals 60 − 160',
        post: 'physical damage to the first enemy hit',
        children: [
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 42% − 60%',
            post: 'bonus AD',
          },
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
    ],
  },
];
const Aphelios3: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Severum.png',
    description:
      'Basic attacks with <b>Severum</b> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> and have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>. <b>Severum\'s</b> attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Aphelios</b> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2.5;" data-finish="9;" data-bot_values="2.5;2.88;3.26;3.65;4.03;4.41;4.79;5.18;5.56;5.94;6.32;6.71;7.09;7.47;7.85;8.24;8.62;9" data-top_values="" data-bot_key="%">2.<small>5</small>% − 9% (based on level)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt, increased to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8.3325;" data-finish="29.997;" data-bot_values="8.33;9.61;10.88;12.16;13.43;14.7;15.98;17.25;18.53;19.8;21.08;22.35;23.63;24.9;26.17;27.45;28.72;30" data-top_values="" data-bot_key="%">8.<small>33</small>% − 30% (based on level)</span> for attacks from abilities.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 3:',
        raw: '5% − 9% (based on level) of the post-mitigation damage dealt, increased to 8',
        damagetype: 'None',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'of the post-mitigation damage dealt, increased to 8',
        pre: '5% − 9%',
        post: 'of the post-mitigation damage dealt, increased to 8',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '33% − 30% (based on level) for attacks from abilities',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'for attacks from abilities',
        pre: '33% − 30%',
        post: 'for attacks from abilities',
      },
    ],
  },
  {
    description:
      'Healing from <b>Severum</b> in excess of <b>Aphelios\' </b> <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span> is converted into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for an amount of up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10;20;30;40;50;60;70;80;90;100;110;120;130;140" data-top_values="1;6;7;8;9;10;11;12;13;14;15;16;17;18">10 − 140 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;6% <b>maximum</b> health)</span>, lingering for up to 30 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "Healing from Severum in excess of Aphelios'   maximum health is converted into a  shield for an amount of up to 10 − 140 (based on level) (+ 6% maximum health), lingering for up to 30 seconds",
        healType: 'BonusHealth',
        values: [
          10, 17.65, 25.29, 32.94, 40.59, 48.24, 55.88, 63.53, 71.18, 78.82,
          86.47, 94.12, 101.76, 109.41, 117.06, 124.71, 132.35, 140,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: ', lingering for up to 30 seconds',
        pre: "Healing from Severum in excess of Aphelios'   maximum health is converted into a  shield for an amount of up to 10 − 140",
        post: ', lingering for up to 30 seconds',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '+ 6% maximum health',
          },
        ],
      },
    ],
  },
];
const Aphelios4: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Onslaught.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> enters an onslaught for 1.<small>75</small> seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> and automatically performing up to 6 <span style="color:orangered; white-space:normal">(+&nbsp;2 per 100% <b>bonus</b> attack speed)</span> attacks over the duration against the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy, prioritizing enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: '75 seconds, gaining  20% (+ 10% per 100 AP) bonus movement speed and automatically performing up to 6 (+ 2 per 100% bonus attack speed) attacks over the duration against the nearest  visible enemy, prioritizing enemy  champions',
        values: 75,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed and automatically performing up to 6',
        pre: '75 seconds, gaining  20%',
        post: 'bonus movement speed and automatically performing up to 6',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 10% per 100 AP',
          },
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus attack speedper 100',
            pre: '+ 2 per 100% bonus attack speed',
          },
        ],
      },
    ],
  },
  {
    description:
      'Attacks alternate between <i>Severum</i> and his current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, each dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="40;13" data-bot_values="10;15;20;25;30;35;40" data-top_values="1;3;5;7;9;11;13">10 − 40 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;1" data-finish="35;13" data-bot_values="20;22.5;25;27.5;30;32.5;35" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">20% − 35% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers, and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> damage at 25% effectiveness.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'Attacks alternate between Severum and his current off-hand weapon, each dealing 10 − 40 (based on level) (+ 20% − 35% (based on level) bonus AD) physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness',
        damagetype: 'Physical',
        values: [
          10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
          27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ap',
        unitsText:
          'physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness',
        pre: 'Attacks alternate between Severum and his current off-hand weapon, each dealing 10 − 40',
        post: 'physical damage, affected by  critical strike modifiers, and applying  on-hit damage at 25% effectiveness',
        children: [
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% − 35%',
            post: 'bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Aphelios</b> cannot cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Phase" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Phase" title="Phase"><img alt="Phase" src="/wiki/images/Aphelios_Phase.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Phase" title="Aphelios/LoL">Phase</a></span></span> nor <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Moonlight Vigil" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Moonlight Vigil"><img alt="Moonlight Vigil" src="/wiki/images/Aphelios_Moonlight_Vigil.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Moonlight_Vigil" title="Aphelios/LoL">Moonlight Vigil</a></span></span> during Onslaught, but he is still able to move. He cannot perform attacks while unable to declare basic attacks.</i>',
    leveling: [],
  },
];
const Aphelios5: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Gravitum.png',
    description:
      'Basic attacks with <b>Gravitum</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies by 30% for 3.<small>5</small> seconds, decaying to 10% after 0.<small>7</small> seconds.',
    leveling: [],
  },
];
const Aphelios6: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Binding_Eclipse.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aphelios" data-ability="Gravitum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aphelios/LoL#Gravitum" title="Gravitum"><img alt="Gravitum" src="/wiki/images/Aphelios_Gravitum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aphelios/LoL#Gravitum" title="Aphelios/LoL">Gravitum</a></span></span> - Active:</b></span> <b>Aphelios</b> expunges all enemies with <i>Gravitum\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> debuff, dealing <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;1" data-finish="110;13" data-bot_values="50;60;70;80;90;100;110" data-top_values="1;3;5;7;9;11;13">50 − 110 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="26;1" data-finish="35;13" data-bot_values="26;27.5;29;30.5;32;33.5;35" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">26% − 35% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Aphelios expunges all enemies with Gravitum's  slow debuff, dealing 50 − 110 (based on level) (+ 26% − 35% (based on level) bonus AD) (+ 70% AP) magic damage and  rooting them for 1 second",
        damagetype: 'Magic',
        values: [
          50, 53.53, 57.06, 60.59, 64.12, 67.65, 71.18, 74.71, 78.24, 81.76,
          85.29, 88.82, 92.35, 95.88, 99.41, 102.94, 106.47, 110,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage and  rooting them for 1 second',
        pre: "Aphelios expunges all enemies with Gravitum's  slow debuff, dealing 50 − 110",
        post: 'magic damage and  rooting them for 1 second',
        children: [
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 26% − 35%',
            post: 'bonus AD',
          },
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
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
      '<i>Binding Eclipse also empowers in-flight Gravitum projectiles to instantly affect their targets upon applying the slow successively.</i>',
    leveling: [],
  },
];
const Aphelios7: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Infernum.png',
    description:
      'Basic attacks with <b>Infernum</b> shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through. The fire bolt deals <span style="color:orange; white-space:normal">110% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to the primary target. Secondary targets hit by any bolt are dealt <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="82.5;1" data-finish="110;9" data-bot_values="82.5;110" data-top_values="1;9" data-bot_key="%">82.<small>5</small> / 110% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, reduced to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25.3;1" data-finish="33;9" data-bot_values="25.3;33" data-top_values="1;9" data-bot_key="%">25.<small>3</small> / 33% (based on level)</span> AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 4:',
        raw: '5 / 110% (based on level) AD physical damage, reduced to 25',
        damagetype: 'Physical',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD physical damage, reduced to 25',
        pre: '5 / 110%',
        post: 'AD physical damage, reduced to 25',
      },
      {
        effectType: 'Gain',
        name: 'Line 5:',
        raw: '3 / 33% (based on level) AD against  minions',
        increasedStat: 'total_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'AD against  minions',
        pre: '3 / 33%',
        post: 'AD against  minions',
      },
    ],
  },
  {
    description:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> also apply to damage dealt to secondary targets and instead spray 6 missiles in a 50% wider cone that deals <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span>.',
    leveling: [],
  },
];
const Aphelios8: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Duskwave.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> unleashes a wave of energy in a cone in the target direction, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;1" data-finish="65;13" data-bot_values="25;31.67;38.33;45;51.67;58.33;65" data-top_values="1;3;5;7;9;11;13">25 − 65 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="56;1" data-finish="80;13" data-bot_values="56;60;64;68;72;76;80" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">56% − 80% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies hit and locking onto each of them. After 0.<small>25</small> seconds, <b>Aphelios</b> then fires a volley of attacks at each locked-on target from his current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness. The damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers. There is no <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> limit for locked-on targets.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Aphelios unleashes a wave of energy in a cone in the target direction, dealing 25 − 65 (based on level) (+ 56% − 80% (based on level) bonus AD) (+ 70% AP) physical damage to all enemies hit and locking onto each of them',
        damagetype: 'Physical',
        values: [
          25, 27.35, 29.71, 32.06, 34.41, 36.76, 39.12, 41.47, 43.82, 46.18,
          48.53, 50.88, 53.24, 55.59, 57.94, 60.29, 62.65, 65,
        ],
        valuesIsBasedOnLevel: true,
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
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 56% − 80%',
            post: 'bonus AD',
          },
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
];
const Aphelios9: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Crescendum.png',
    description:
      'Basic attacks with <b>Crescendum</b> hurl the blade at the target, which lingers for 0.<small>25</small> seconds before homing back to <b>Aphelios</b>. He is unable to declare basic attacks until he retrieves <b>Crescendum</b>, but the attack timer is reset <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This does not persist when swapping weapons.">once caught</span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Aphelios_Crescendum_2.png',
    description:
      'Whenever <b>Aphelios</b> casts an ability that would require him to throw <b>Crescendum</b>, he instead fires a spectral <i>Chakram</i> at the target that similarly returns to him. <b>Aphelios</b> accumulates the <i>Chakrams</i> he catches, up to 20, which last for 5 seconds or until <b>Crescendum</b> is depleted of <i>Moonlight</i>. Attacks with <b>Crescendum</b> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> will refresh the duration of <i>Chakrams</i>.',
    leveling: [],
  },
  {
    description:
      'Basic attacks with <b>Crescendum</b> are empowered to deal <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="number of Chakrams" data-displayformula="Each Chakram grants less bonus damage than the last, starting at 15% and diminishing to 5% for 10+&nbsp;Chakrams." data-bot_values="0;15;28.5;40.5;51;60;67.5;73.5;78.5;83.5;88.5;93.5;98.5;103.5;108.5;113.5;118.5;123.5;128.5;133.5;138.5" data-top_values="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" data-bot_key="%">0% − 138.<small>5</small>% (based on number of Chakrams)</span> AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and have a 10.<small>67</small>% <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">wind up</a></span></i> percentage, decreased to 6.<small>67</small>% when <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span>. The <b>bonus</b> damage from <i>Chakrams</i> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: '5% (based on number of Chakrams) AD bonus physical damage and have a 10',
        damagetype: 'Physical',
        values: 5,
        valuesIsPercent: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'AD bonus physical damage and have a 10',
        pre: '5%',
        post: 'AD bonus physical damage and have a 10',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on number of Chakrams',
            pre: 'based on number of Chakrams',
          },
        ],
      },
    ],
  },
];
const Aphelios10: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Sentry.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> deploys a lunar sentry at the target location that arms after 0.<small>35</small> seconds, lasting for up to 20 seconds, during which it is inactive and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>. The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable. Sentries have <span style="color: #1F995C; white-space:normal">6 health</span> and take 3 damage per <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> basic attack and 4 damage per hit by abilities. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turret</a></span> attacks destroy sentries instantly.',
    leveling: [],
  },
  {
    description:
      'The sentry grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of <b>Aphelios\' </b> current <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="31;1" data-finish="100;13" data-bot_values="31;42.5;54;65.5;77;88.5;100" data-top_values="1;3;5;7;9;11;13">31 − 100 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;1" data-finish="60;13" data-bot_values="40;43.33;46.67;50;53.33;56.67;60" data-top_values="1;3;5;7;9;11;13" data-bot_key="%">40% − 60% (based on level)</span> <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> per hit. The sentry can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> and benefits from both <b>Aphelios\'</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal">critical strike chance</span></span> at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "The sentry grants  sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios'  current off-hand weapon, dealing 31 − 100 (based on level) (+ 40% − 60% (based on level) bonus AD) (+ 50% AP) physical damage per hit",
        values: [
          31, 35.06, 39.12, 43.18, 47.24, 51.29, 55.35, 59.41, 63.47, 67.53,
          71.59, 75.65, 79.71, 83.76, 87.82, 91.88, 95.94, 100,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'physical damage per hit',
        pre: "The sentry grants  sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios'  current off-hand weapon, dealing 31 − 100",
        post: 'physical damage per hit',
        children: [
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40% − 60%',
            post: 'bonus AD',
          },
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
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
      '<i>See <a href="/wiki/Aphelios/LoL#Pets" title="Aphelios/LoL">Pets</a> for more details about the sentry. Sentry will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Phase.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> switches between his <span style="color: #7A6DFF; white-space:normal">main weapon</span> and <span style="color: #E34D4C; white-space:normal">off-hand</span> weapon over 0.<small>25</small> seconds.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      'The icon of this ability reflects the next weapon that is in reserve.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> receives a text prompt of the weapon <b>Alune</b> will create next.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Aphelios_Moonlight_Vigil.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aphelios</b> casts forth a lunar spotlight in the target direction that briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area along its path and stops upon illuminating an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. <b>Alune</b> smites the area centered on the illuminated target, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="125;6" data-finish="225;16" data-bot_values="125;175;225" data-top_values="6;11;16">125 / 175 / 225 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy champions struck and locking-on to each target hit, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225 (based on level) (+ 20% bonus AD) (+ 100% AP) physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds',
        pre: 'Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225',
        post: 'physical damage to enemy champions struck and locking-on to each target hit, as well as granting  sight of the area for 2 seconds',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
          },
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
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
      'After 0.<small>3</small> seconds of the illumination, attacks based on <b>Aphelios\' </b> current <span style="color: #7A6DFF; white-space:normal">main weapon</span> will launch from the sky against each locked-on target, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness. These attacks can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(20%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>. There is no <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> limit for locked-on targets.\n',
    leveling: [],
  },
];
export const Aphelios = {
  I,
  Q,
  Aphelios1,
  Aphelios2,
  Aphelios3,
  Aphelios4,
  Aphelios5,
  Aphelios6,
  Aphelios7,
  Aphelios8,
  Aphelios9,
  Aphelios10,
  W,
  E,
  R,
};
