import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Samira';

export default {
  'Daredevil Impulse': {
    name: 'Daredevil Impulse',
    display_name: 'Daredevil Impulse',
    champion: 'Samira',
    skill: 'I',
    image: {
      full: 'SamiraP.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '650 / 727.5 / 805 / 882.5 / 960 (based on level)',
    ontargetcdstatic:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Empowered attack">10</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate - Style:</b></span> Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira"><img alt="Samira" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira</a></span></span> generates <i>Style</i> stacks by hitting attacks and abilities unique from the previous hit, stacking up to 6 times. She gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> based on stacks.',
      '<span class="template_sbc"><b>Innate:</b></span> <b>Samira\'s</b> basic attacks within melee range will strike with her blade, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>. <b>Samira\'s</b> blade and her damaging basic abilities deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> against enemies based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
      '<b>Samira\'s</b> basic attacks against an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilized"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> target become empowered, dealing the damage over 6 strikes. If the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, the attack briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span>. She will also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> into <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> if the target is nearby.',
    ],
    description: [
      {
        description:
          "Innate: Samira's damaging basic attacks and abilities against at least one enemy  champion different from the previous damaging hit made against champions generate a stack of Style for 6 seconds, refreshing on subsequent hits and stacking up to 6 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Samira\'s</b> damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> different from the previous damaging hit made against champions generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Style</i> for 6 seconds, refreshing on <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not have to be unique">subsequent</span> hits and stacking up to 6 times.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: " Samira's damaging basic attacks and abilities against at least one enemy  champion different from the previous damaging hit made against champions generate a stack of Style for 6 seconds, refreshing on subsequent hits and stacking up to 6 times.",
            increasedStat: 'feastStacks',
            values: 6,
            units: '',
            unitsText:
              'damaging basic attacks and abilities against at least one enemy  champion different from the previous damaging hit made against champions generate a stack of Style for 6 seconds, refreshing on subsequent hits and stacking up to 6 times.',
            pre: "Samira's damaging basic attacks and abilities against at least one enemy  champion different from the previous damaging hit made against champions generate a stack of Style for 6 seconds, refreshing on subsequent hits and stacking up to 6 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Samira Style.gif',
        description:
          'Style: For each stack, Samira gains  3.5% bonus movement speed, up to a maximum of 21%. At maximum stacks, Samira can cast  Inferno Trigger.',
        descriptionHTML:
          '<span class="template_sbc"><b>Style:</b></span> For each stack, <b>Samira</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">3.<small>5</small>% <b>bonus</b> movement speed</span></span>, up to a maximum of <span style="color: #F5EE99; white-space:normal">21%</span>. At maximum stacks, <b>Samira</b> can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Style:',
            raw: ' For each stack, Samira gains  3.5% bonus movement speed, up to a maximum of 21%',
            increasedStat: 'feastStacks',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus movement speed, up to a maximum of 21each stack, Samira gains  3.5',
            pre: 'For each stack, Samira gains  3.5% bonus movement speed, up to a maximum of 21%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Daredevil Impulse.png',
        description:
          "Innate: Samira's basic attacks against targets in  200 range use her blade, becoming  non-projectile. Blade attacks  on-hit,  Blade Whirl,  Wild Rush, and the slash and explosives of  Flair deal 2 − 19 (based on level) (+ 3.5% − 10.5% (based on level) AD) bonus magic damage, increased by 0% − 100% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Samira\'s</b> basic attacks against targets in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200 range use her blade, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>. Blade attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span></i>, and the slash and explosives of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span></i> deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2;" data-finish="19;" data-bot_values="2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19" data-top_values="">2 − 19 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.5;" data-finish="10.5;" data-bot_values="3.5;3.91;4.32;4.74;5.15;5.56;5.97;6.38;6.79;7.21;7.62;8.03;8.44;8.85;9.26;9.68;10.09;10.5" data-top_values="" data-bot_key="%">3.<small>5</small>% − 10.<small>5</small>% (based on level)</span> AD)</span> <b>bonus</b> magic damage</span>, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-start="0;0" data-finish="100;100" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on target\'s <b>missing</b> health)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: " Samira's basic attacks against targets in  200 range use her blade, becoming  non-projectile",
            increasedStat: 'total_ad',
            values: 2,
            user: 'target',
            units: '',
            unitsText:
              'basic attacks against targets in  200 range use her blade, becoming  non-projectile',
            pre: "Samira's basic attacks against targets in  200 range use her blade, becoming  non-projectile",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Blade attacks  on-hit,  Blade Whirl,  Wild Rush, and the slash and explosives of  Flair deal 2 − 19 (based on level) (+ 3.5% − 10.5% (based on level) AD) bonus magic damage, increased by 0% − 100% (based on target's missing health).",
            healType: 'OutgoingHeals',
            values: [2, 19],
            basedOn: "target's missing health",
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage, increased by 0% − 100%',
            pre: 'Blade attacks  on-hit,  Blade Whirl,  Wild Rush, and the slash and explosives of  Flair deal 2 − 19',
            post: 'bonus magic damage, increased by 0% − 100%',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 3.5% − 10.5%',
                post: 'AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Samira's basic attack against an  immobilized target is empowered to have an  uncancellable windup and deal the attack's damage over 6 strikes in 0.5 seconds. If the target is a  monster or is  airborne, the attack also  knocks them up for 0.5 seconds. Samira will  dash into her  attack range of the target if they are nearby, though not through terrain.",
        descriptionHTML:
          '<b>Samira\'s</b> basic attack against an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilized"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> target is empowered to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deal the <span style="color:orange; white-space:normal">attack\'s damage</span> over 6 strikes in 0.<small>5</small> seconds. If the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, the attack also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>5</small> seconds. <b>Samira</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> into her <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> of the target if they are nearby, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Samira's basic attack against an  immobilized target is empowered to have an  uncancellable windup and deal the attack's damage over 6 strikes in 0.5 seconds",
            increasedStat: 'total_ad',
            values: 6,
            user: 'target',
            units: '',
            unitsText:
              "basic attack against an  immobilized target is empowered to have an  uncancellable windup and deal the attack's damage over 6 strikes in 0.5 seconds",
            pre: "Samira's basic attack against an  immobilized target is empowered to have an  uncancellable windup and deal the attack's damage over 6 strikes in 0.5 seconds",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "The empowered attack  resets Samira's basic attack timer, is affected by  critical strike modifiers, applies  on-hit effects only once, and cannot occur on the same target more than once every few seconds.",
        descriptionHTML:
          'The empowered attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Samira\'s</b> basic attack timer, is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects only once, and cannot occur on the same target more than once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'special',
    notes:
      '* The stack count is represented by the grades <img alt="Samira Rank E.png" src="/wiki/images/Samira_Rank_E.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <img alt="Samira Rank D.png" src="/wiki/images/Samira_Rank_D.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <img alt="Samira Rank C.png" src="/wiki/images/Samira_Rank_C.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <img alt="Samira Rank B.png" src="/wiki/images/Samira_Rank_B.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <img alt="Samira Rank A.png" src="/wiki/images/Samira_Rank_A.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <img alt="Samira Rank S.png" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> to the left of her <a href="/wiki/Health_bar" title="Health bar">health bar</a> for <b>Samira</b> herself, and a stack counter underneath the bar that is visible to all players.\n<ul><li>The empowered attack can trigger on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizes</a></span> from both ally and enemy sources.\n<ul><li>Self-applied or allied-applied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizes</a></span> from the enemy <b>will</b> count for the empowered attack to trigger.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>Those applied by the <i>neutral</i> team (e.g. <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragon\'s"><img alt="Dragon\'s" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragon\'s</a></span></span> initial knock back) <b>can</b> be targeted.</li>\n<li>It cannot trigger against enemies knocked <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> by a <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blast_Cone" title="Blast Cone"><img alt="Blast Cone" src="/wiki/images/Blast_ConeSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blast_Cone" class="mw-redirect" title="Blast Cone">Blast Cone</a></span></span> triggered by anyone.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li>\n<li>The empowered attack\'s interaction with <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immunities to crowd control</a>:\n<ul><li>It <i>will not</i> trigger against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> targets. If the empowered attack had already gone off, the knock up will <i>not</i> be resisted, thus interrupting the target\'s actions.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>It <i>will</i> trigger against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span> targets.\n<ul><li>The knock up will however be partially resisted against <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Black Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Black_Shield" title="Black Shield"><img alt="Black Shield" src="/wiki/images/Morgana_Black_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Black_Shield" title="Morgana/LoL">Black Shield</a></span></span>; only the disabling portion (airborne debuff) will be negated but not the displacement (forced movement).<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>The knock up will be resisted by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Riposte" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Riposte" title="Riposte"><img alt="Riposte" src="/wiki/images/Fiora_Riposte.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Riposte" title="Fiora/LoL">Riposte</a></span></span>, but the ability does not trigger its on-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilization</a></span> effect.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li></ul></li>\n<li>The empowered attack will not apply the knock up against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suspension"><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a><a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control#Suspension"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suspension" title="Types of Crowd Control">suspended</a></span> enemies.</li>\n<li>The empowered attack will only apply the knock up if the target is still <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> upon being hit. It will not apply if they are no longer disabled when hit.</li>\n<li>The empowered attack cannot be used against a target with a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li>The application of the knock up can occur on any of the missiles of the empowered attack if it had not already occurred on the first missile.\n<ul><li>A missile that is parried by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Riposte" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Riposte" title="Riposte"><img alt="Riposte" src="/wiki/images/Fiora_Riposte.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Riposte" title="Fiora/LoL">Riposte</a></span></span> or is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, or missed while <b>Samira</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span> <b>cannot</b> apply the knock up.</li></ul></li>\n<li>While <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, <b>Samira</b> cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> into range to use the empowered attack. She can only use it if her target is within her <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> while under this condition.</li>\n<li>The on-target cooldown will apply even if the empowered attack is parried.</li>\n<li>The empowered attack rolls <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> for each shot of the flurry.</li>\n<li>The <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> dealt with the blade is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span>. The empowered attack is first 1 instance of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> and then 5 instances of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span>.\n<ul><li>The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul></li>\n<li>The empowered attack is unaffected by <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Attack_speed" title="Attack speed">attack speed</a></span> modifiers.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade\'s"><img alt="Guinsoo\'s Rageblade\'s" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade\'s</a></span></span> <i>Phantom Hit</i> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> bolts will not apply the <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, since it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> of specifically the melee attack casts.</li>\n<li>Attacks with the gun and blade do not count as different attacks for stacking <i>Style</i>.</li>\n<li>Basic attacks using the blade are still classified as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span>.</li>\n<li>The melee attack\'s range condition is unaffected by <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> modifiers (e.g. <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>).\n<ul><li>Blade range is calculated edge-to-edge just like basic attack ranges are, hence both <b>Samira</b> gaining bonus <a href="/wiki/Size" title="Size">size</a> or her target increases the total distance at which <b>Samira</b> can attack them with the blade.</li></ul></li>\n<li>Since the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> requires an exterior source to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilize</a></span> the enemy, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Aftershock" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aftershock_(Rune)" title="Aftershock"><img alt="Aftershock" src="/wiki/images/Aftershock_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Aftershock_(Rune)" class="mw-redirect" title="Aftershock (Rune)">Aftershock</a></span></span> will be swapped with <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Grasp of the Undying" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Grasp_of_the_Undying_(Rune)" title="Grasp of the Undying"><img alt="Grasp of the Undying" src="/wiki/images/Grasp_of_the_Undying_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Grasp_of_the_Undying_(Rune)" title="Grasp of the Undying (Rune)">Grasp of the Undying</a></span></span> for <b>Samira</b> at the start of the game.</li>\n<li>Since <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger\'s"><img alt="Inferno Trigger\'s" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger\'s</a></span></span> cooldown is static, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Ultimate Hunter" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ultimate_Hunter_(Rune)" title="Ultimate Hunter"><img alt="Ultimate Hunter" src="/wiki/images/Ultimate_Hunter_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Ultimate_Hunter_(Rune)" class="mw-redirect" title="Ultimate Hunter (Rune)">Ultimate Hunter</a></span></span> will be swapped with <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Treasure Hunter" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Treasure_Hunter_(Rune)" title="Treasure Hunter"><img alt="Treasure Hunter" src="/wiki/images/Treasure_Hunter_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Treasure_Hunter_(Rune)" class="mw-redirect" title="Treasure Hunter (Rune)">Treasure Hunter</a></span></span> for <b>Samira</b> at the start of the game.</li>\n<li>Abilities blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span> will still grant <b>Samira</b> <i>Style</i> stacks.</li>\n<li><b>Samira</b> still gains <i>Style</i> stacks from damaging attacks and abilities landed against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li></ul>',
  },
  Flair: {
    name: 'Flair',
    display_name: 'Flair',
    champion: 'Samira',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SamiraQ.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '950 /  400',
    target_range: '340',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Gun shot">120</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Blade targeting check width">130</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Gun">2600</span>',
    cast_time: '0.<small>25</small>',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">6 / 5 / 4 / 3 / 2</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira"><img alt="Samira" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira</a></span></span> fires a shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
      'If <i>Flair</i> is cast towards an enemy in melee range, <b>Samira</b> will instead slash with her sword, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
      'If <i>Flair</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span></i>, <b>Samira</b> deploys explosives in her wake that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Flair.png',
        description:
          'Active: Samira fires a shot in the target direction that deals physical damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> fires a shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '0 / 5 / 10 / 15 / 20 (+ 85 / 95 / 105 / 115 / 125% AD)',
            valuesHTML:
              '0 / 5 / 10 / 15 / 20 <span style="color:orange; white-space:normal">(+&nbsp;85 / 95 / 105 / 115 / 125% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '0 / 5 / 10 / 15 / 20 (+ 85 / 95 / 105 / 115 / 125% AD)',
            damagetype: 'Physical',
            values: [0, 5, 10, 15, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0 / 5 / 10 / 15 / 20',
            children: [
              {
                values: [85, 95, 105, 115, 125],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 85 / 95 / 105 / 115 / 125% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'If a targetable enemy is in front of Samira at the time of cast, she will instead slash with her blade in a cone, dealing the same damage to enemies hit.',
        descriptionHTML:
          'If a targetable enemy is in front of <b>Samira</b> at the time of cast, she will instead slash with her blade in a cone, dealing the same damage to enemies hit.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If Flair is cast during  Wild Rush, Samira deploys explosives in her wake that detonate upon the end of the dash, dealing the same damage to enemies hit.',
        descriptionHTML:
          'If <i>Flair</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span></i>, <b>Samira</b> deploys explosives in her wake that detonate upon the end of the dash, dealing the same damage to enemies hit.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Flair can  critically strike for (25% +  35%) bonus physical damage and will apply  life steal at 66.6% effectiveness.',
        descriptionHTML:
          '<i>Flair</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(25%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span> and will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">apply</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 66.<small>6</small>% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Flair can  critically strike for (25% +  35%) bonus physical damage and will apply  life steal at 66.6% effectiveness.',
            damagetype: 'Physical',
            values: 0,
            units: 'lifesteal',
            unitsText:
              'bonus physical damage and will apply  life steal at 66.6% effectiveness.',
            pre: 'Flair can  critically strike for',
            post: 'bonus physical damage and will apply  life steal at 66.6% effectiveness.',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '25% +  35%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'special',
    callforhelp: 'special',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> on the shot and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> on the slash and explosives.\n<ul><li><ul><li><span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">Life steal</a></span> will always benefit from the damage dealt at 66.<small>6</small>% effectiveness and does not take into account of the ability\'s <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a>, whereas on the other hand for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Omnivamp"><a href="/wiki/Vamp#Omnivamp" title="Vamp#Omnivamp"><img alt="Omnivamp colored icon.png" src="/wiki/images/Omnivamp_colored_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Vamp#Omnivamp" title="Vamp">omnivamp</a></span> does, and it will modify the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> accordingly.</li></ul></li>\n<li><i>Flair\'s</i> shot against an enemy champion will aggro nearby enemy minions.</li>\n<li><i>Flair</i> can be cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span></i> even if <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span></i> are active.</li>\n<li>The slash and explosives roll their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> against each target individually.</li>\n<li>The shot and the slash do not count as different abilities for stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Daredevil Impulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Style"><img alt="Style" src="/wiki/images/Samira_Daredevil_Impulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Samira/LoL">Style</a></span></span>.</li>\n<li><b>Samira\'s</b> next attack after using <i>Flair</i> will occasionally come out faster.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li><b>Samira</b> can use <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span> during <i>Flair\'s</i> cast time.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Flair</i> will fire or slash from wherever <b>Samira</b> is at the end of the cast time.\n<ul><li><b>Samira</b> will always slash in her facing direction, and she will turn to face the target direction only once at the start of the cast time.</li></ul></li></ul></li>\n<li><i>Flair</i> can be buffered 0.<small>5</small> seconds before it comes off cooldown.</li>\n<li>Only the shot will be destroyed by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectile-intercepting</a></span> effects.</li>\n<li>The explosive placement is illustrated in <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span> regardless of whether <i>Flair</i> is available.\n<ul><li>The VFX always covers the the full dash\'s distance even if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span> is interrupted mid-dash.</li></ul></li></ul>',
  },
  'Blade Whirl': {
    name: 'Blade Whirl',
    display_name: 'Blade Whirl',
    champion: 'Samira',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SamiraW.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 325',
    cast_time: '0.<small>1</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">30 / 28 / 26 / 24 / 22</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira"><img alt="Samira" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira</a></span></span> briefly spins her blade, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. During this time, she will destroy enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>  that enter the area.',
      'After the duration, she slashes again to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Blade Whirl.png',
        description:
          'Active: Samira spins her blade over 0.75 seconds, destroying all hostile non- turret  projectiles within the area for the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> spins her blade over 0.<small>75</small> seconds, destroying all hostile non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> within the area for the duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Samira slashes twice during Blade Whirl, each one dealing physical damage to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.',
        descriptionHTML:
          '<b>Samira</b> slashes twice during <i>Blade Whirl</i>, each one dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '20 / 35 / 50 / 65 / 80 (+ 80% bonus AD)',
            valuesHTML:
              '20 / 35 / 50 / 65 / 80 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 80% bonus AD)',
            damagetype: 'Physical',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
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
        description:
          'Samira cannot attack nor cast  Flair during Blade Whirl. Casting  Inferno Trigger will end Blade Whirl early.',
        descriptionHTML:
          '<i><b>Samira</b> cannot attack nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> during Blade Whirl. Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span> will end Blade Whirl early.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage from one slash.\n<ul><li>While the ability has a cast time - the cast time has no effect on the ability\'s usability. All effects begin immediately and <b>Samira</b> can move throughout.</li>\n<li><i>Blade Whirl</i> can be buffered 0.<small>5</small> seconds before it comes off cooldown.</li>\n<li>Both slashes count as the same ability for stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Daredevil Impulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Style"><img alt="Style" src="/wiki/images/Samira_Daredevil_Impulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Samira/LoL">Style</a></span></span>.</li>\n<li>The effect ending early includes the second slash not being performed, if applicable.</li>\n<li>Entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> will also end <i>Blade Whirl</i> early.\n<ul><li>Other item actives and channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> or <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> will <i>not</i> end the effect early.</li></ul></li>\n<li><b>Samira</b> can ignore the lockout for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> and basic attacks if she uses <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span> and queues up <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> and/or a basic attack at the start of it.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Samira_Original_W_5.ogg   "Don\'t think so."',
  },
  'Wild Rush': {
    name: 'Wild Rush',
    display_name: 'Wild Rush',
    champion: 'Samira',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SamiraE.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '650 /  800 /  -150',
    target_range: '600',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 300',
    speed: '1600',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown: '20 / 18 / 16 / 14 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira"><img alt="Samira" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> at the target enemy or enemy structure, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through. She also gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a short time.',
      'Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;resets</span> <i>Wild Rush\'s</i> cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Wild Rush.png',
        description:
          'Active: Samira  dashes a fixed distance in the direction of the target enemy or enemy  structure, dealing magic damage to enemies she passes through. She also gains  bonus attack speed for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structure</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies she passes through. She also gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'She also gains  bonus attack speed for 3 seconds.',
            increasedStat: 'bonus_ad',
            values: 3,
            units: '',
            unitsText: 'also gains  bonus attack speed for 3 seconds.',
            pre: 'She also gains  bonus attack speed for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 60 / 70 / 80 / 90 (+ 20% bonus AD)',
            valuesHTML:
              '50 / 60 / 70 / 80 / 90 <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 60 / 70 / 80 / 90 (+ 20% bonus AD)',
            damagetype: 'Magic',
            values: [50, 60, 70, 80, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90',
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
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
      },
      {
        description:
          "Scoring a  takedown against an enemy  champion within 3 seconds of damaging them resets Wild Rush's  cooldown.",
        descriptionHTML:
          'Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them resets <i>Wild Rush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Scoring a  takedown against an enemy  champion within 3 seconds of damaging them resets Wild Rush's  cooldown.",
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              "a  takedown against an enemy  champion within 3 seconds of damaging them resets Wild Rush's  cooldown.",
            pre: "Scoring a  takedown against an enemy  champion within 3 seconds of damaging them resets Wild Rush's  cooldown.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Flair and  Inferno Trigger can be cast during the dash. Casting  Blade Whirl will buffer it to cast at the end of the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span> can be cast during the dash. Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> will buffer it to cast at the end of the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <b>Samira</b> gains the attack speed buff at the start of the dash, and it lasts for 3 seconds from that point on.\n<ul><li><i>Wild Rush</i> does not deal its damage to turrets.</li>\n<li><i>Wild Rush</i> prioritizes targeting champions over turrets.</li>\n<li><i>Wild Rush</i> can be buffered 0.<small>5</small> seconds before it comes off cooldown.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Inferno Trigger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Inferno Trigger"><img alt="Inferno Trigger" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Inferno_Trigger" title="Samira/LoL">Inferno Trigger</a></span></span> will be buffered to cast at the end of the dash if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> was cast during the dash.</li>\n<li>Casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during <i>Wild Rush</i> will interrupt the dash but deal damage to nearby enemies at the location.\n<ul><li>If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> was cast during this time, an explosive will also be placed at that location.</li></ul></li>\n<li><i>Wild Rush</i> will also reset if <b>Samira</b> kills or gets assist credit on a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> that dies (to hostiles).<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
  },
  'Inferno Trigger': {
    name: 'Inferno Trigger',
    display_name: 'Inferno Trigger',
    champion: 'Samira',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SamiraR.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600',
    cast_time: 'none',
    cost: '6 Style',
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira"><img alt="Samira" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira</a></span></span> unleashes a torrent of shots, reducing her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> and rapidly firing shots that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
      'Each shot can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">apply</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.',
      '<i>Inferno Trigger</i> costs <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Daredevil Impulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="6 Style"><img alt="6 Style" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Samira/LoL">6 Style</a></span></span></i> stacks.',
    ],
    description: [
      {
        icon: '/wiki/images/Samira Rank S.png',
        description:
          'Active: Samira unleashes a torrent of shots for 2.277 seconds, reducing her movement speed by 30% and rapidly shooting at  nearby enemies over 2.013 seconds at sporadic times in 0.2-second intervals each, dealing physical damage with each shot, reduced by 75% against  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Samira</b> unleashes a torrent of shots for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2.25 seconds, but rounded up to the next game tick.">2.<small>277</small> seconds</span>, <b>reducing</b> her <span style="color: #F5EE99; white-space:normal">movement speed</span> by <span style="color: #F5EE99; white-space:normal">30%</span> and rapidly shooting at  nearby enemies over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2 seconds, but rounded up to the next game tick.">2.<small>013</small> seconds</span> at sporadic times in <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="on average; total of 5 intervals of 0.231 and 5 of 0.198 seconds">0.<small>2</small>-second intervals</span> each, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> with each shot, reduced by 75% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Samira unleashes a torrent of shots for 2.277 seconds, reducing her movement speed by 30% and rapidly shooting at  nearby enemies over 2.013 seconds at sporadic times in 0.2-second intervals each, dealing physical damage with each shot, reduced by 75% against  minions.',
            increasedStat: 'total_ap',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'and rapidly shooting at  nearby enemies over 2.013 seconds at sporadic times in 0.2-second intervals each, dealing physical damage with each shot, reduced by 75unleashes a torrent of shots for 2.277 seconds, reducing her movement speed by 30',
            pre: 'Samira unleashes a torrent of shots for 2.277 seconds, reducing her movement speed by 30% and rapidly shooting at  nearby enemies over 2.013 seconds at sporadic times in 0.2-second intervals each, dealing physical damage with each shot, reduced by 75% against  minions.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Shot:',
            values: '5 / 10 / 15 / 20 / 25 (+ 50% AD)',
            valuesHTML:
              '5 / 10 / 15 / 20 / 25 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span>',
          },
          {
            name: 'Minion Damage Per Shot:',
            values: '1.25 / 2.5 / 3.75 / 5 / 6.25 (+ 12.5% AD)',
            valuesHTML:
              '1.<small>25</small> / 2.<small>5</small> / 3.<small>75</small> / 5 / 6.<small>25</small> <span style="color:orange; white-space:normal">(+&nbsp;12.<small>5</small>% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Shot:',
            raw: '5 / 10 / 15 / 20 / 25 (+ 50% AD)',
            damagetype: 'Physical',
            values: [5, 10, 15, 20, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minion Damage Per Shot:',
            raw: '1.25 / 2.5 / 3.75 / 5 / 6.25 (+ 12.5% AD)',
            damagetype: 'None',
            values: [1.25, 2.5, 3.75, 5, 6.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 2.5 / 3.75 / 5 / 6.25',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 12.5% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'Each shot can  critically strike for (75% +  35%) bonus physical damage and applies  life steal at 66.6% effectiveness.',
        descriptionHTML:
          'Each shot can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 66.<small>6</small>% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Each shot can  critically strike for (75% +  35%) bonus physical damage and applies  life steal at 66.6% effectiveness.',
            damagetype: 'Physical',
            values: 0,
            units: 'lifesteal',
            unitsText:
              'bonus physical damage and applies  life steal at 66.6% effectiveness.',
            pre: 'Each shot can  critically strike for',
            post: 'bonus physical damage and applies  life steal at 66.6% effectiveness.',
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
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Inferno Trigger 2.png',
        description:
          'A nearby  visible enemy is required to cast this ability, and targets do not have to be visible to be shot at.  Style stacks are consumed at the end of the effect.',
        descriptionHTML:
          '<i>A nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy is required to cast this ability, and targets do not have to be visible to be shot at. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Daredevil Impulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Style"><img alt="Style" src="/wiki/images/Samira_Rank_S.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Daredevil_Impulse" title="Samira/LoL">Style</a></span></span> stacks are consumed at the end of the effect.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Samira cannot attack nor cast  Flair and  Blade Whirl during Inferno Trigger, but she can still move. Inferno Trigger will end prematurely by all forms of  cast-inhibiting crowd control as well as  disarm.',
        descriptionHTML:
          '<i><b>Samira</b> cannot attack nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Flair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Flair" title="Flair"><img alt="Flair" src="/wiki/images/Samira_Flair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Flair" title="Samira/LoL">Flair</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> during Inferno Trigger, but she can still move. Inferno Trigger will end prematurely by all forms of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarm</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoedot',
    spellshield: 'Special',
    projectile: 'true',
    callforhelp: 'true',
    notes:
      '* <b>Samira\'s</b> facing direction remains as it had been or, if she is moving, towards that direction during <i>Inferno Trigger</i>.\n<ul><li>The <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Movement_speed" title="Movement speed">movement speed</a></span> reduction stacks additively with other <span style="color: #F5EE99; white-space:normal">movement speed</span> bonuses.\n<ul><li>It is a negative bonus, not a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>, and is thus not reduced by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span>.</li></ul></li>\n<li><i>Inferno Trigger\'s</i> area of effect is fixed around <b>Samira</b>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage of one shot.</li>\n<li><i>Inferno Trigger</i> will not end if there are no enemies that remain in range.</li>\n<li><i>Inferno Trigger</i> can be buffered 0.<small>5</small> seconds before it becomes unsealed or off cooldown.</li>\n<li>The bottom of the <a href="/wiki/Summoner" title="Summoner">player\'s</a> screen will have a fiery visual effect while <b>Samira</b> is at <i>S</i> rank and <i>Inferno Trigger</i> has at least one rank.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce\'s"><img alt="Galeforce\'s" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce\'s</a></span></span> <i>Cloudburst</i> can be used during <i>Inferno Trigger</i>, but <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw\'s"><img alt="Prowler\'s Claw\'s" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw\'s</a></span></span> <i>Sandswipe</i> can\'t.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Samira_Original_R_1.ogg   "Showtime!"',
  },
  Taunt: {
    name: 'Taunt',
    display_name: '/taunt',
    champion: 'Samira',
    skill: 'CTRL+2',
    range: '950 /  890',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1400',
    blurb: [],
    description: [
      {
        icon: '/wiki/images/Samira_splash_coin.png',
        description:
          "Samira's taunt  prevents her from inputting attack commands and casting non-movement abilities, and she may only interrupt it herself with a movement command. After 3 seconds without interruption, she will toss a  coin in the direction she is facing.",
        descriptionHTML:
          '<b>Samira\'s</b> <a href="/wiki/Emoting" title="Emoting">taunt</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">prevents</a></span> her from inputting attack commands and casting non-movement abilities, and she may only interrupt it herself with a movement command. After 3 seconds without interruption, she will toss a <img alt="Samira splash coin.png" src="/wiki/images/Samira_splash_coin.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> coin in the direction she is facing.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After 3 seconds without interruption, she will toss a  coin in the direction she is facing.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              '3 seconds without interruption, she will toss a  coin in the direction she is facing.',
            pre: 'After 3 seconds without interruption, she will toss a  coin in the direction she is facing.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "If she has at least  1, the coin deals   1 true damage to the first enemy champion hit and granting them  1 of Samira's gold.",
        descriptionHTML:
          'If she has at least <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span>, the coin deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">1 true damage</span></span></span> to the first enemy champion hit and granting them <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span> of <b>Samira\'s</b> <a href="/wiki/Gold" class="mw-redirect" title="Gold">gold</a>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "If she has at least  1, the coin deals   1 true damage to the first enemy champion hit and granting them  1 of Samira's gold.",
            increasedStat: 'gold',
            values: 1,
            units: '',
            unitsText:
              "she has at least  1, the coin deals   1 true damage to the first enemy champion hit and granting them  1 of Samira's gold.",
            pre: "If she has at least  1, the coin deals   1 true damage to the first enemy champion hit and granting them  1 of Samira's gold.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If cast within 1200 units of a  visible enemy champion, Samira will turn to face towards the closest one to perform the animation.',
        descriptionHTML:
          'If cast within 1200 units of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion, <b>Samira</b> will turn to face towards the closest one to perform the animation.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If cast within 1200 units of a  visible enemy champion, Samira will turn to face towards the closest one to perform the animation.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'cast within 1200 units of a  visible enemy champion, Samira will turn to face towards the closest one to perform the animation.',
            pre: 'If cast within 1200 units of a  visible enemy champion, Samira will turn to face towards the closest one to perform the animation.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Samira's Taunt can target and hit dead enemy champions, granting them  1 but not triggering other effects.",
        descriptionHTML:
          '<b>Samira\'s</b> <i>Taunt</i> can target and hit dead enemy champions, granting them <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span> but not triggering other effects.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Samira's Taunt can target and hit dead enemy champions, granting them  1 but not triggering other effects.",
            increasedStat: 'total_ad',
            values: 1,
            user: 'target',
            units: '',
            unitsText:
              'Taunt can target and hit dead enemy champions, granting them  1 but not triggering other effects.',
            pre: "Samira's Taunt can target and hit dead enemy champions, granting them  1 but not triggering other effects.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'unknown',
    damagetype: 'True',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'true',
    notes:
      '* <b>Samira</b> must have at least <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span> to weaponize her Taunt animation.\n<ul><li>Using her <i>Taunt</i> does <b>not</b> count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.</li>\n<li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span> can be cast during her <i>Taunt</i>, but neither interrupt the effect.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>If Samira\'s facing direction is changed before the coin is fired (e.g. by casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Wild Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Wild_Rush" title="Wild Rush"><img alt="Wild Rush" src="/wiki/images/Samira_Wild_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Wild_Rush" title="Samira/LoL">Wild Rush</a></span></span>), she will still turn toward her initial <i>facing direction</i> to toss the coin. Note: <i>facing direction</i>, not toward the location of the target.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Samira_Original_Taunt_2.ogg   "Buy something nice. On me."',
  },
} satisfies { [skillName in string]: SkillData };
