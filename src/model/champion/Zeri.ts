import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';

export const name: ChampionName = 'Zeri';
const A: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Zeri</b> generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire</a></span></span></i>, up to a maximum of 100 charge. Her <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> consume charge to deal <b>modified</b> damage.<br><b>Zeri</b> gains maximum charge when the game starts and upon <a href="/wiki/Respawn" class="mw-redirect" title="Respawn">respawning</a>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Basic_Attack.png',
    description:
      '<a href="/wiki/Basic_Attack" class="mw-redirect" title="Basic Attack"><span class="template_sbc"><b>Basic Attack:</b></span></a> <b>Zeri</b> zaps the target, applying <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a> as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>, and triggering on-cast effects. This cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> nor trigger <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
    leveling: [],
  },
  {
    img: '/wiki/images/Zeri_Basic_Attack.png',
    description:
      'While not at full charge, <b>Zeri\'s</b> attacks deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="10+(15/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="10;10.64;11.3;12;12.73;13.49;14.28;15.1;15.95;16.83;17.74;18.69;19.66;20.67;21.7;22.77;23.87;25" data-top_values="">10 − 25 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>, and <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">execute</span> targets <span style="color: #1F995C; white-space:normal">below <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="6*10+(6*15/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="60;63.81;67.81;71.99;76.36;80.91;85.65;90.57;95.68;100.98;106.46;112.12;117.97;124.01;130.23;136.63;143.22;150" data-top_values="">60 − 150 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> <span style="color: #1F995C; white-space:normal">health</span>. Each attack consumes 10 charge if she has enough already.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "While not at full charge, Zeri's attacks deal 10 − 25 (based on level) (+ 3% AP) magic damage, and  execute targets below 60 − 150 (based on level) (+ 18% AP) health",
        healType: 'OutgoingHeals',
        values: [
          10, 10.88, 11.76, 12.65, 13.53, 14.41, 15.29, 16.18, 17.06, 17.94,
          18.82, 19.71, 20.59, 21.47, 22.35, 23.24, 24.12, 25,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage, and  execute targets below 60 − 150',
        pre: "While not at full charge, Zeri's attacks deal 10 − 25",
        post: 'magic damage, and  execute targets below 60 − 150',
        children: [
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 3% AP',
          },
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Zeri_Basic_Attack_2.png',
    description:
      'At full charge, <b>Zeri\'s</b> next attack is empowered to consume all charge to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="90+(110/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="90;94.66;99.54;104.66;109.99;115.56;121.35;127.37;133.61;140.08;146.78;153.7;160.85;168.23;175.83;183.66;191.72;200" data-top_values="">90 − 200 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;110% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="1+(14/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="1;1.59;2.21;2.87;3.54;4.25;4.99;5.76;6.55;7.37;8.23;9.11;10.02;10.96;11.92;12.92;13.95;15" data-top_values="" data-bot_key="%">1% − 15% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>. The damage based on the target\'s health ratio is capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "At full charge, Zeri's next attack is empowered to consume all charge to deal 90 − 200 (based on level) (+ 110% AP) (+ 1% − 15% (based on level) of target's maximum health) magic damage",
        healType: 'OutgoingHeals',
        values: [
          90, 96.47, 102.94, 109.41, 115.88, 122.35, 128.82, 135.29, 141.76,
          148.24, 154.71, 161.18, 167.65, 174.12, 180.59, 187.06, 193.53, 200,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage',
        pre: "At full charge, Zeri's next attack is empowered to consume all charge to deal 90 − 200",
        post: 'magic damage',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 110% AP',
          },
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 1% − 15%',
            post: "of target's maximum health",
          },
        ],
      },
    ],
  },
];
const I: SubSkill[] = [
  {
    img: '/wiki/images/Zeri_Living_Battery.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Zeri</b> absorbs the energy of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> she damages, granting herself a shield equal to 60% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to the shield. Each instance of shield gained by <i>Living Battery</i> lasts for 3 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Zeri_Living_Battery_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Gotta Zip!:</b></span> Whenever <b>Zeri</b> gains a shield, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span> for 2 seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Zeri_Burst_Fire.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> fires a burst of 7 rounds in the target direction that each deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '15 / 17 / 19 / 21 / 23 (+ 104 / 108 / 112 / 116 / 120% AD)',
        values: [15, 17, 19, 21, 23],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 17 / 19 / 21 / 23',
        children: [
          {
            values: [104, 108, 112, 116, 120],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 104 / 108 / 112 / 116 / 120% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage per Hit:',
        raw: '2.14 / 2.43 / 2.71 / 3 / 3.29 (+ 14.86 / 15.43 / 16 / 16.57 / 17.14% AD)',
        values: [2.14, 2.43, 2.71, 3, 3.29],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2.14 / 2.43 / 2.71 / 3 / 3.29',
        children: [
          {
            values: [14.86, 15.43, 16, 16.57, 17.14],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 14.86 / 15.43 / 16 / 16.57 / 17.14% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Burst Fire\'s</i> projectile is treated as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span>: it hits any enemy unit a typical basic attack can; deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>; can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #944B00; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>)</span> <b>bonus</b> damage; and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness to the first enemy hit. <i>Burst Fire\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and cast time are reduced with <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span>, with the maximum of <span style="color:orangered; white-space:normal">1.<small>5</small></span> attacks per second. 70% of <span style="color:orangered; white-space:normal">attack speed</span> in excess of the cap is converted into <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Zeri_Ultrashock_Laser.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> fires an electric pulse in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.<br><br>If the pulse hits <a href="/wiki/Terrain" title="Terrain">terrain</a>, it transforms into a laser in a line that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1.<small>75</small> seconds and fires after 0.<small>85</small> seconds, applying the same effects to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span> for <span style="color: #944B00; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>)</span> <b>bonus</b> damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 4:',
        raw: '85 seconds, applying the same effects to enemies hit and  critically striking for (75% +  35%) bonus damage against  champions and  monsters',
        values: 85,
        user: 'none',
        units: '',
        unitsText: 'bonus damage against  champions and  monsters',
        pre: '85 seconds, applying the same effects to enemies hit and  critically striking for',
        post: 'bonus damage against  champions and  monsters',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '+  35',
            pre: '75% +  35%',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 60 / 100 / 140 / 180 (+ 130% AD) (+ 25% AP)',
        values: [20, 60, 100, 140, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 60 / 100 / 140 / 180',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 130% AD',
          },
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
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
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Zeri_Spark_Surge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction. She will dash farther across <a href="/wiki/Terrain" title="Terrain">terrain</a> if <i>Spark Surge</i> was cast within 50 units of any, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span> of the surrounding 800 units and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself while there are enemy champions within 1500 units of her.',
    leveling: [],
  },
  {
    description:
      'Afterwards, she gains <i>Lightning Rounds</i> for 5 seconds, empowering <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_2" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_2" title="Zeri/LoL">Burst Fire</a></span></span></i> to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to the first enemy hit, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-start="0;0" data-finish="65;100" data-bot_values="0;6.5;13;19.5;26;32.5;39;45.5;52;58.5;65" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 65% (based on critical strike chance)</span></span>, and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> to secondary targets. This damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'Afterwards, she gains Lightning Rounds for 5 seconds, empowering  Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% − 65% (based on critical strike chance), and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets',
        increasedStat: 'lifesteal',
        values: 5,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText:
          ', and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets',
        pre: 'Afterwards, she gains Lightning Rounds for 5 seconds, empowering  Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% − 65%',
        post: ', and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_critchance',
            unitsText: 'based on critical strike chance',
            pre: 'based on critical strike chance',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: ' Burst Fire Bonus Magic Damage:',
        raw: '20 / 22 / 24 / 26 / 28 (+ 12% bonus AD) (+ 20% AP)',
        values: [20, 22, 24, 26, 28],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 22 / 24 / 26 / 28',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 12% bonus AD',
          },
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: ' Burst Fire Modified Damage:',
        raw: '80 / 85 / 90 / 95 / 100%',
        values: [80, 85, 90, 95, 100],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 85 / 90 / 95 / 100%',
      },
    ],
  },
  {
    description:
      '<i>Spark Surge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>5</small> seconds for every <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <b>Zeri</b> hits with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attacks or abilities, increased to 1.<small>5</small> seconds if she does so with a cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Ultrashock Laser" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Ultrashock Laser"><img alt="Ultrashock Laser" src="/wiki/images/Zeri_Ultrashock_Laser.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Zeri/LoL">Ultrashock Laser</a></span></span></i> that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Spark Surge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Zeri\'s</b> basic attack timer and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire\'s"><img alt="Burst Fire\'s" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire\'s</a></span></span> cooldown. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Ultrashock Laser" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Ultrashock Laser"><img alt="Ultrashock Laser" src="/wiki/images/Zeri_Ultrashock_Laser.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Zeri/LoL">Ultrashock Laser</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Lightning Crash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Lightning Crash"><img alt="Lightning Crash" src="/wiki/images/Zeri_Lightning_Crash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Zeri/LoL">Lightning Crash</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Zeri_Lightning_Crash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> discharges an electric nova that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits at least one enemy champion, she enters <i>Overcharged</i> for 5 seconds. Hitting an enemy champion with an ability or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attack will extend the duration by 1.<small>5</small> seconds, up to its original duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '175 / 275 / 375 (+ 100% bonus AD) (+ 110% AP)',
        values: [175, 275, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 275 / 375',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 110% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Overcharged:</b></span> <b>Zeri</b> gains <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can exceed Zeri\'s attack speed cap"><span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30% <b>bonus</b> attack speed</span></span></span> and <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;10% <b>bonus</b> movement speed</span></span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Zeri/LoL">Burst Fire</a></span></span></i> is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy within 650 units of the target, up to 4 subsequent targets, to deal <span style="color:orange; white-space:normal">25% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>. This damage can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(18.<small>75</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="8.75%"><img alt="8.75%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">8.<small>75</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [],
  },
  {
    description:
      'During <i>Overcharged</i>, <b>Zeri</b> can generate <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Hypercharged</i> from enemy champions that last 1.<small>5</small> seconds. She generates 1 stack for each one she hits with an ability or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attack, increased to 3 on abilities that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. Subsequent hits refresh the duration of <i>Hypercharged</i>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Zeri/LoL">Burst Fire</a></span></span></i> grants stacks only against the first target hit.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Hypercharged:</b></span> For each stack, <b>Zeri</b> gains <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>% <b>bonus</b> movement speed</span></span>.',
    leveling: [],
  },
];
export const Zeri = { A, I, Q, W, E, R };
