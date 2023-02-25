import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "Kai'Sa";

export default {
  'Second Skin': {
    name: 'Second Skin',
    display_name: 'Second Skin',
    champion: "Kai'Sa",
    skill: 'I',
    image: {
      full: 'Kaisa_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Radius for allied disables to apply Plasma">2750</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate - Living Weapon:</b></span> When <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa"><img alt="Kai\'Sa" src="/wiki/images/Kai%27Sa_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa/LoL">Kai\'Sa</a></span></span> gains enough power from growth and item purchases, she can evolve her <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a>.',
      '<span class="template_sbc"><b>Innate - Caustic Wounds:</b></span> <b>Kai\'Sa\'s</b> basic attacks and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span> apply stacks of <span style="color: #AF1AAF; white-space:normal">Plasma</span>, the fifth stack consumes them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
      'Allies\' <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing effects</a></span> help stack <span style="color: #AF1AAF; white-space:normal">Plasma</span>.',
      '<span class="template_sbc"><b>Plasma:</b></span> Inflicting <span style="color: #AF1AAF; white-space:normal">Plasma</span> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, increased for each stack already applied.',
    ],
    description: [
      {
        icon: '/wiki/images/Second Skin.png',
        description:
          "Innate - Living Weapon: Kai'Sa can evolve each of her basic abilities by gaining a set amount of permanent stats from items and stat growth, granting them additional effects. Evolving an ability causes her to enter a 2-second cast time. The upgrade is lost if the stat requirement is no longer met.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Living Weapon:</b></span> <b>Kai\'Sa</b> can evolve each of her <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a> by gaining a set amount of permanent <a href="/wiki/Champion_statistic" title="Champion statistic">stats</a> from <a href="/wiki/Item" class="mw-redirect" title="Item">items</a> and <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Includes all stats gained when leveling (including base AD gained), but does not include stats at level 1.">stat growth</span>, granting them additional effects. Evolving an ability causes her to enter a 2-second <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>. The upgrade is lost if the stat requirement is no longer met.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Evolving an ability causes her to enter a 2-second cast time',
            values: 2,
            units: 'total_ap',
            unitsText: 'an ability causes her to enter a 2-second cast time',
            pre: 'Evolving an ability causes her to enter a 2-second cast time',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Kai'Sa Plasma.png",
        description:
          "Innate - Plasma: Kai'Sa's basic attacks  on-hit and  Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times. Basic attacks each apply 1 stack and  Void Seeker applies 2 stacks, increased to 3 if it is  evolved. Her and nearby allies'  immobilizing effects and  polymorphs against enemy  champions will also apply a stack of Plasma.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Plasma:</b></span> <b>Kai\'Sa\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span></i> apply <a href="/wiki/Stack" title="Stack">stacks</a> of <span style="color: #AF1AAF; white-space:normal">Plasma</span> to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times. Basic attacks each apply 1 stack and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span></i> applies 2 stacks, increased to 3 if it is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker_2" title="evolved"><img alt="evolved" src="/wiki/images/Kai%27Sa_Void_Seeker_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker_2" title="Kai\'Sa/LoL">evolved</a></span></span>. Her and nearby allies\' <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effects and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphs</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> will also apply a stack of <span style="color: #AF1AAF; white-space:normal">Plasma</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate - Plasma:',
            raw: " Kai'Sa's basic attacks  on-hit and  Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times",
            min: 0,
            max: 10,
            description:
              " Kai'Sa's basic attacks  on-hit and  Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times",
            values: 4,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and  Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times',
            pre: "Kai'Sa's basic attacks  on-hit and  Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Basic attacks each apply 1 stack and  Void Seeker applies 2 stacks, increased to 3 if it is  evolved',
            min: 0,
            max: 10,
            description:
              'Basic attacks each apply 1 stack and  Void Seeker applies 2 stacks, increased to 3 if it is  evolved',
            values: 1,
            units: 'total_ap',
            unitsText:
              'attacks each apply 1 stack and  Void Seeker applies 2 stacks, increased to 3 if it is  evolved',
            pre: 'Basic attacks each apply 1 stack and  Void Seeker applies 2 stacks, increased to 3 if it is  evolved',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Innate - Caustic Wounds: Plasma stacks applied by Kai'Sa's basic attacks or  Void Seeker deal 5 − 23 (based on level) (+ 1 − 12 (based on level) per Plasma stack before application) (+ 15% − 25% (based on Plasma stacks before application) AP) bonus magic damage. The fifth stack against a target consumes them all to deal additional bonus magic damage equal to 15% (+ 6% per 100 AP) of the target's missing health, capped at 400 against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Caustic Wounds:</b></span> <span style="color: #AF1AAF; white-space:normal">Plasma</span> stacks applied by <b>Kai\'Sa\'s</b> basic attacks or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span></i> deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;1" data-finish="23;18" data-bot_values="5;6.06;7.12;8.18;9.24;10.29;11.35;12.41;13.47;14.53;15.59;16.65;17.71;18.76;19.82;20.88;21.94;23" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18">5 − 23 (based on level)</span></span> <span style="color: #AF1AAF; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;1" data-finish="12;18" data-bot_values="1;1.65;2.29;2.94;3.59;4.24;4.88;5.53;6.18;6.82;7.47;8.12;8.76;9.41;10.06;10.71;11.35;12" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18">1 − 12 (based on level)</span> per Plasma stack before application)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Plasma stacks before application" data-start="15;0" data-finish="25;4" data-bot_values="15;17.5;20;22.5;25" data-top_values="0;1;2;3;4" data-bot_key="%">15% − 25% (based on Plasma stacks before application)</span> AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. The fifth stack against a target consumes them all to deal <span style="color: #00B0F0; white-space:normal"><b>additional bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">15% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span> of the target\'s <b>missing</b> health</span>, capped at 400 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate - Caustic Wounds:',
            raw: " Plasma stacks applied by Kai'Sa's basic attacks or  Void Seeker deal 5 − 23 (based on level) (+ 1 − 12 (based on level) per Plasma stack before application) (+ 15% − 25% (based on Plasma stacks before application) AP) bonus magic damage",
            min: 0,
            max: 10,
            description:
              " Plasma stacks applied by Kai'Sa's basic attacks or  Void Seeker deal 5 − 23 (based on level) (+ 1 − 12 (based on level) per Plasma stack before application) (+ 15% − 25% (based on Plasma stacks before application) AP) bonus magic damage",
            values: [
              5, 6.06, 7.12, 8.18, 9.24, 10.29, 11.35, 12.41, 13.47, 14.53,
              15.59, 16.65, 17.71, 18.76, 19.82, 20.88, 21.94, 23,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage',
            pre: "Plasma stacks applied by Kai'Sa's basic attacks or  Void Seeker deal 5 − 23",
            post: 'bonus magic damage',
            children: [
              {
                values: [
                  1, 1.65, 2.29, 2.94, 3.59, 4.24, 4.88, 5.53, 6.18, 6.82, 7.47,
                  8.12, 8.76, 9.41, 10.06, 10.71, 11.35, 12,
                ],
                basedOn: 'level',
                units: 'total_ap',
                unitsText: 'per Plasma stack before application',
                pre: '+ 1 − 12',
                post: 'per Plasma stack before application',
              },
              {
                values: 15,
                valuesIsPercent: true,
                basedOn: 'Plasma stacks before application',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% − 25%',
                post: 'AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The fifth stack against a target consumes them all to deal additional bonus magic damage equal to 15% (+ 6% per 100 AP) of the target's missing health, capped at 400 against  monsters.",
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              "of the target's missing health, capped at 400 against  monsters.",
            pre: 'The fifth stack against a target consumes them all to deal additional bonus magic damage equal to 15%',
            post: "of the target's missing health, capped at 400 against  monsters.",
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 6% per 100 AP',
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
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: 'Special',
    notes:
      '* <b>Kai\'Sa</b> receives the evolution even if she dies while in cast time.\n<ul><li><b>Kai\'Sa</b> can evolve an ability even if she hasn\'t learned it yet.</li>\n<li>The bonus missing health damage is evaluated after the initial damage from <i>Caustic Wounds</i> is evaluated, and after <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker\'s"><img alt="Void Seeker\'s" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker\'s</a></span></span> damage if triggered by it, but before a triggering basic attack\'s is.\n<ul><li>This effectively increases the "flat" <i>Caustic Wounds</i> damage preceding the expunge proc and (if applicable) <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span> damage and any potential preceding on-hit damage (usually not possible to acquire due to buff slot order) by 15% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% per 100 AP)</span> divided by (1+<span style="color:yellow; white-space:normal">the target\'s MR post penetration</span>/100).</li></ul></li>\n<li><span style="color: #AF1AAF; white-space:normal">Plasma</span> stacks that exceed the rupture are reapplied normally.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the <span style="color: #AF1AAF; white-space:normal">Plasma</span> application from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span> only.</li>\n<li>With <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span>, if the stacks detonate <span style="color: #AF1AAF; white-space:normal">Plasma</span>, any remaining stacks are reapplied afterwards. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Void Seeker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Void Seeker"><img alt="Void Seeker" src="/wiki/images/Kai%27Sa_Void_Seeker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Void_Seeker" title="Kai\'Sa/LoL">Void Seeker</a></span></span> also deals <i>Caustic Wounds\' </i>damage based on <span style="color: #AF1AAF; white-space:normal">Plasma</span> stacks on the target. This damage is calculated as if each stack was applied successively.\n<ul><li>Hitting a target with 0 stack with normal <i>Void Seeker</i>: <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2 stacks, 5 - 23 each"><span style="color: #00B0F0; white-space:normal">10 − 46 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0 stack + 1 stack, 1 - 12 each"><span style="color: #AF1AAF; white-space:normal">(+&nbsp;1 − 12 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0 stack AP ratio 15% + 1 stack AP ratio 17.5%"><span style="color: #7A6DFF; white-space:normal">(+&nbsp;32.5% AP)</span></span></li>\n<li>Hitting a target with 3 stacks with normal <i>Void Seeker</i>: <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2 stacks, 5 - 23 each"><span style="color: #00B0F0; white-space:normal">10 − 46 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="3 stacks + 4 stacks, 1 - 12 each"><span style="color: #AF1AAF; white-space:normal">(+&nbsp;7 − 84 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="3 stacks AP ratio 22.5% + 4 stacks AP ratio 25%"><span style="color: #7A6DFF; white-space:normal">(+&nbsp;47.5% AP)</span></span></li>\n<li>Hitting a target with 0 stack with evolved <i>Void Seeker</i>: <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="3 stacks, 5 - 23 each"><span style="color: #00B0F0; white-space:normal">15 − 69 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0 stack + 1 stack + 2 stacks, 1 - 12 each"><span style="color: #AF1AAF; white-space:normal">(+&nbsp;3 − 36 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0 stack AP ratio 15% + 1 stack AP ratio 17.5% + 2 stacks AP ratio 20%"><span style="color: #7A6DFF; white-space:normal">(+&nbsp;52.5% AP)</span></span></li>\n<li>Hitting a target with 2 stacks with evolved <i>Void Seeker</i>: <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="3 stacks, 5 - 23 each"><span style="color: #00B0F0; white-space:normal">15 − 69 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2 stacks + 3 stacks + 4 stacks, 1 - 12 each"><span style="color: #AF1AAF; white-space:normal">(+&nbsp;9 − 108 (based on level)</span></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="2 stacks AP ratio 20% + 3 stacks AP ratio 22.5% + 4 stacks AP ratio 25%"><span style="color: #7A6DFF; white-space:normal">(+&nbsp;67.5% AP)</span></span></li></ul></li></ul>',
    yvideo: "Kai'Sa - Passive",
  },
  'Icathian Rain': {
    name: 'Icathian Rain',
    display_name: 'Icathian Rain',
    champion: "Kai'Sa",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KaisaQ.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '600',
    cast_time: 'none',
    cost: '55',
    costtype: 'Mana',
    cooldown: '10 / 9 / 8 / 7 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Kai\'Sa</b> shoots a swarm of missiles that evenly seek out nearby enemies, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Second Skin" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Living Weapon"><img alt="Living Weapon" src="/wiki/images/Kai%27Sa_Second_Skin.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Kai\'Sa/LoL">Living Weapon</a></span></span> Bonus:</b></span> [<b>Requires <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span></b>]<br><i>Icathian Rain</i> fires more missiles.',
    ],
    description: [
      {
        icon: '/wiki/images/Icathian Rain.png',
        description:
          "Active: Kai'Sa releases a swarm of 6 missiles that evenly distributes among nearby  visible enemies, each one hitting their target after 0.4 seconds to deal physical damage.  Minions below  35% health take double damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kai\'Sa</b> releases a swarm of 6 missiles that evenly distributes among nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies, each one hitting their target after 0.<small>4</small> seconds to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">35% health</span></span> take double damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Kai'Sa releases a swarm of 6 missiles that evenly distributes among nearby  visible enemies, each one hitting their target after 0.4 seconds to deal physical damage",
            damagetype: 'Physical',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'releases a swarm of 6 missiles that evenly distributes among nearby  visible enemies, each one hitting their target after 0.4 seconds to deal physical damage',
            pre: "Kai'Sa releases a swarm of 6 missiles that evenly distributes among nearby  visible enemies, each one hitting their target after 0.4 seconds to deal physical damage",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: ' Minions below  35% health take double damage.',
            healType: 'BonusHealth',
            values: 3,
            valuesIsPercent: true,
            units: 'total_hp',
            unitsText: 'health take double damage.below  35',
            pre: 'Minions below  35% health take double damage.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Missile:',
            values: '40 / 55 / 70 / 85 / 100 (+ 50% bonus AD) (+ 30% AP)',
            valuesHTML:
              '40 / 55 / 70 / 85 / 100 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Missile:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 50% bonus AD) (+ 30% AP)',
            damagetype: 'Physical',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
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
          'Non-minions take 25% damage from missiles beyond their first.',
        descriptionHTML:
          'Non-minions take 25% damage from missiles beyond their first.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Non-minions take 25% damage from missiles beyond their first.',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage from missiles beyond their first.take 25',
            pre: 'Non-minions take 25% damage from missiles beyond their first.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage Per Missile:',
            values:
              '10 / 13.75 / 17.5 / 21.25 / 25 (+ 12.5% bonus AD) (+ 7.5% AP)',
            valuesHTML:
              '10 / 13.<small>75</small> / 17.<small>5</small> / 21.<small>25</small> / 25 <span style="color:orange; white-space:normal">(+&nbsp;12.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage Per Missile:',
            raw: '10 / 13.75 / 17.5 / 21.25 / 25 (+ 12.5% bonus AD) (+ 7.5% AP)',
            damagetype: 'None',
            values: [10, 13.75, 17.5, 21.25, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 13.75 / 17.5 / 21.25 / 25',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 12.5% bonus AD',
              },
              {
                values: 7.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7.5% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Icathian Rain 2.png',
        description:
          'Evolution: Requires「  100 − 66 (based on level) attack damage from items 」「  100 attack damage from items and stat growth 」to upgrade – Icathian Rain instead fires 12 missiles.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Second Skin" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Evolution"><img alt="Evolution" src="/wiki/images/Kai%27Sa_Second_Skin.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Kai\'Sa/LoL">Evolution</a></span></span>:</b></span> Requires<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100-2*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="100;99;98;96;94;93;91;89;87;85;83;81;79;76;74;72;69;66" data-top_values="">100 − 66 (based on level)</span> attack damage</span></span> from items&nbsp;」</span><span class="flipText2">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">100 attack damage</span></span> from items and stat growth&nbsp;」</span></span>to upgrade – <i>Icathian Rain</i> instead fires 12 missiles.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Evolution:',
            raw: ' Requires「  100 − 66 (based on level) attack damage from items 」「  100 attack damage from items and stat growth 」to upgrade – Icathian Rain instead fires 12 missiles.',
            damagetype: 'None',
            values: [
              100, 98, 96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76, 74, 72, 70,
              68, 66,
            ],
            basedOn: 'level',
            units: 'total_ad',
            unitsText:
              'attack damage from items 」「  100 attack damage from items and stat growth 」to upgrade – Icathian Rain instead fires 12 missiles.',
            pre: 'Requires「  100 − 66',
            post: 'attack damage from items 」「  100 attack damage from items and stat growth 」to upgrade – Icathian Rain instead fires 12 missiles.',
          },
        ],
        leveling: [
          {
            name: 'Total Evolved Single-Target Damage:',
            values:
              '150 / 206.25 / 262.5 / 318.75 / 375 (+ 187.5% bonus AD) (+ 112.5% AP)',
            valuesHTML:
              '150 / 206.<small>25</small> / 262.<small>5</small> / 318.<small>75</small> / 375 <span style="color:orange; white-space:normal">(+&nbsp;187.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;112.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Evolved Single-Target Damage:',
            raw: '150 / 206.25 / 262.5 / 318.75 / 375 (+ 187.5% bonus AD) (+ 112.5% AP)',
            damagetype: 'None',
            values: [150, 206.25, 262.5, 318.75, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 206.25 / 262.5 / 318.75 / 375',
            children: [
              {
                values: 187.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 187.5% bonus AD',
              },
              {
                values: 112.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 112.5% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'A nearby enemy is required to cast this ability.',
        descriptionHTML:
          '<i>A nearby enemy is required to cast this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* The first missile on a target applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>, while the rest on the same target apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> only block the damage from a single missile.</li>\n<li><i>Icathian Rain</i> acquires its targets upon cast. Moving will not change its targets.</li>\n<li>Charging <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Supercharge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Supercharge" title="Supercharge"><img alt="Supercharge" src="/wiki/images/Kai%27Sa_Supercharge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Supercharge" title="Kai\'Sa/LoL">Supercharge</a></span></span> will not stop the missiles from firing.</li>\n<li>It takes 1 second for all missiles to fire at a single target.</li></ul>',
    yvideo: "Kai'Sa - Q",
  },
  'Void Seeker': {
    name: 'Void Seeker',
    display_name: 'Void Seeker',
    champion: "Kai'Sa",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KaisaW.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '3000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    speed: '1750',
    cast_time: '0.<small>4</small>',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'Mana',
    cooldown: '22 / 20 / 18 / 16 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa"><img alt="Kai\'Sa" src="/wiki/images/Kai%27Sa_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa/LoL">Kai\'Sa</a></span></span> fires a void bolt in the target direction that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory as it travels and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for a few seconds.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Second Skin" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Living Weapon"><img alt="Living Weapon" src="/wiki/images/Kai%27Sa_Second_Skin.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Kai\'Sa/LoL">Living Weapon</a></span></span> Bonus:</b></span> [<b>Requires <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span></b>]<br><i>Void Seeker</i> applies more <span style="color: #AF1AAF; white-space:normal">Plasma</span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the cooldown if it hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Void Seeker.png',
        description:
          "Active: Kai'Sa fires a void bolt in the target direction that briefly grants  sight around its trajectory as it travels, deals magic damage to the first enemy hit, applies 2 Plasma, and  reveals them for 4 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kai\'Sa</b> fires a void bolt in the target direction that briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory as it travels, deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, applies <span style="color: #AF1AAF; white-space:normal">2 Plasma</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> them for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: " Kai'Sa fires a void bolt in the target direction that briefly grants  sight around its trajectory as it travels, deals magic damage to the first enemy hit, applies 2 Plasma, and  reveals them for 4 seconds.",
            increasedStat: 'total_ap',
            values: 2,
            units: '',
            unitsText:
              'fires a void bolt in the target direction that briefly grants  sight around its trajectory as it travels, deals magic damage to the first enemy hit, applies 2 Plasma, and  reveals them for 4 seconds.',
            pre: "Kai'Sa fires a void bolt in the target direction that briefly grants  sight around its trajectory as it travels, deals magic damage to the first enemy hit, applies 2 Plasma, and  reveals them for 4 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '30 / 55 / 80 / 105 / 130 (+ 130% AD) (+ 45% AP)',
            valuesHTML:
              '30 / 55 / 80 / 105 / 130 <span style="color:orange; white-space:normal">(+&nbsp;130% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 130% AD) (+ 45% AP)',
            damagetype: 'Magic',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 130% AD',
              },
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Void Seeker 2.png',
        description:
          'Evolution: Requires  100 ability power from items to upgrade – Void Seeker applies 3 Plasma instead and refunds 77% of its  cooldown it hits an enemy  champion.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Second Skin" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Evolution"><img alt="Evolution" src="/wiki/images/Kai%27Sa_Second_Skin.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Kai\'Sa/LoL">Evolution</a></span></span>:</b></span> Requires <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">100 ability power</span></span> from <a href="/wiki/Items" class="mw-redirect" title="Items">items</a> to upgrade – <i>Void Seeker</i> applies <span style="color: #AF1AAF; white-space:normal">3 Plasma</span> instead and refunds 77% of its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> it hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Evolution:',
            raw: ' Requires  100 ability power from items to upgrade – Void Seeker applies 3 Plasma instead and refunds 77% of its  cooldown it hits an enemy  champion.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of its  cooldown it hits an enemy  champion. 100 ability power from items to upgrade – Void Seeker applies 3 Plasma instead and refunds 77',
            pre: 'Requires  100 ability power from items to upgrade – Void Seeker applies 3 Plasma instead and refunds 77% of its  cooldown it hits an enemy  champion.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
    yvideo: "Kai'Sa - W",
  },
  Supercharge: {
    name: 'Supercharge',
    display_name: 'Supercharge',
    champion: "Kai'Sa",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KaisaE.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time:
      '<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="bonus attack speed" data-displayformula="0.006 seconds per 1% \'\'\'bonus\'\'\' attack speed. \'\'This is capped at 0.6 seconds.\'\'" data-bot_values="1.2;1.08;0.96;0.84;0.72;0.6" data-top_values="0;20;40;60;80;100" data-top_key="%">1.<small>2</small> − 0.<small>6</small> (based on <b>bonus</b> attack speed)</span></span>',
    cost: '30',
    costtype: 'Mana',
    cooldown: '16 / 14.<small>5</small> / 13 / 11.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa"><img alt="Kai\'Sa" src="/wiki/images/Kai%27Sa_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa/LoL">Kai\'Sa</a></span></span> briefly becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> move speed</span></span> during the cast time, then gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Second Skin" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Living Weapon"><img alt="Living Weapon" src="/wiki/images/Kai%27Sa_Second_Skin.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Kai\'Sa/LoL">Living Weapon</a></span></span> Bonus:</b></span> [<b>Requires <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span></b>]<br><i>Supercharge</i> briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Supercharge.png',
        description:
          "Active: Kai'Sa charges up over the cast time, during which she is still allowed to move, becomes  ghosted, and gains  bonus movement speed, with the effectiveness increased by 0% − 100% (based on bonus attack speed).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kai\'Sa</b> charges up over the cast time, during which she is still allowed to move, becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span>, and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, with the effectiveness increased by <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="bonus attack speed" data-displayformula="1% per 1% \'\'\'bonus\'\'\' attack speed." data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on <b>bonus</b> attack speed)</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Movement Speed:',
            values: '55 / 60 / 65 / 70 / 75%',
            valuesHTML: '55 / 60 / 65 / 70 / 75%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Minimum Movement Speed:',
            raw: '55 / 60 / 65 / 70 / 75%',
            values: [55, 60, 65, 70, 75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 60 / 65 / 70 / 75%',
          },
        ],
      },
      {
        description:
          'After completing the charge, she gains  bonus attack speed and reduces her basic attack windup percentage by 6.44% for 4 seconds.',
        descriptionHTML:
          'After completing the charge, she gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and reduces her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">basic attack windup</a></span> percentage by 6.<small>44</small>% for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'After completing the charge, she gains  bonus attack speed and reduces her basic attack windup percentage by 6.44% for 4 seconds.',
            increasedStat: 'bonus_ad',
            values: 6,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'for 4 seconds.completing the charge, she gains  bonus attack speed and reduces her basic attack windup percentage by 6.44',
            pre: 'After completing the charge, she gains  bonus attack speed and reduces her basic attack windup percentage by 6.44% for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 50 / 60 / 70 / 80%',
            valuesHTML: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
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
      {
        description:
          "Supercharge's  current cooldown is reduced by 0.5 seconds on-attack.",
        descriptionHTML:
          '<i>Supercharge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>5</small> seconds <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Supercharge 2.png',
        description:
          'Evolution: Requires「  100% − 70% (based on level) attack speed from items 」「  100% attack speed from items and stat growth 」to upgrade – Supercharge grants  invisibility at the start of the cast time for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-ability="Second Skin" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Evolution"><img alt="Evolution" src="/wiki/images/Kai%27Sa_Second_Skin.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL#Second_Skin" title="Kai\'Sa/LoL">Evolution</a></span></span>:</b></span> Requires<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100-1.8*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="100;99;98;96;95;93;92;90;88;87;85;83;81;79;77;74;72;70" data-top_values="" data-bot_key="%">100% − 70% (based on level)</span> attack speed</span></span> from items&nbsp;」</span><span class="flipText2">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">100% attack speed</span></span> from items and stat growth&nbsp;」</span></span>to upgrade – <i>Supercharge</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> at the start of the cast time for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Evolution:',
            raw: ' Requires「  100% − 70% (based on level) attack speed from items 」「  100% attack speed from items and stat growth 」to upgrade – Supercharge grants  invisibility at the start of the cast time for 0.5 seconds.',
            increasedStat: 'total_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText:
              'attack speed from items 」「  100% attack speed from items and stat growth 」to upgrade – Supercharge grants  invisibility at the start of the cast time for 0.5 seconds.',
            pre: 'Requires「  100% − 70%',
            post: 'attack speed from items 」「  100% attack speed from items and stat growth 」to upgrade – Supercharge grants  invisibility at the start of the cast time for 0.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      "* Her attack commands during this time are switched to movement commands instead. Upon finishing the charge and if an attack command was issued, <b>Kai'Sa</b> will continue walking toward her target.\n<ul><li><ul><li><b>Kai'Sa</b> behaves normally if attack move click was issued not on a target during the cast time, stopping at attack range of the closest target and starts attacking when charged up.</li></ul></li></ul>",
    yvideo: "Kai'Sa - E",
  },
  'Killer Instinct': {
    name: 'Killer Instinct',
    display_name: 'Killer Instinct',
    champion: "Kai'Sa",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KaisaR.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1500 / 1875 / 2250 / 2625 / 3000',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Area around enemy champions">525</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '130 / 115 / 100 / 85 / 70',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kai\'Sa" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa"><img alt="Kai\'Sa" src="/wiki/images/Kai%27Sa_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kai%27Sa/LoL" title="Kai\'Sa/LoL">Kai\'Sa</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to a target location near an enemy champion recently affected by <span style="color: #AF1AAF; white-space:normal">Plasma</span>. She gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> during the dash that lasts a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Killer Instinct.png',
        description:
          "Active: Kai'Sa grants herself a  shield for 2 seconds and  dashes to a target location near a  visible enemy champion that was affected by Plasma within the last 4 seconds. The shield's duration is refreshed when the dash ends.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kai\'Sa</b> grants herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to a target location near a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion that was <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Stack application or consumption">affected</span> by <span style="color: #AF1AAF; white-space:normal">Plasma</span> within the last 4 seconds. The shield\'s duration is refreshed when the dash ends.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: " Kai'Sa grants herself a  shield for 2 seconds and  dashes to a target location near a  visible enemy champion that was affected by Plasma within the last 4 seconds",
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'grants herself a  shield for 2 seconds and  dashes to a target location near a  visible enemy champion that was affected by Plasma within the last 4 seconds',
            pre: "Kai'Sa grants herself a  shield for 2 seconds and  dashes to a target location near a  visible enemy champion that was affected by Plasma within the last 4 seconds",
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values:
              '70 / 80 / 90 / 100 / 110 (+ 90 / 112.5 / 135 / 157.5 / 180% AD) (+ 120% AP)',
            valuesHTML:
              '70 / 80 / 90 / 100 / 110 <span style="color:orange; white-space:normal">(+&nbsp;90 / 112.<small>5</small> / 135 / 157.<small>5</small> / 180% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;120% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 90 / 112.5 / 135 / 157.5 / 180% AD) (+ 120% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: [90, 112.5, 135, 157.5, 180],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 90 / 112.5 / 135 / 157.5 / 180% AD',
              },
              {
                values: 120,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "A nearby enemy champion affected by Plasma is required to cast this ability. Killer Instinct  resets Kai'Sa's basic attack timer. Kai'Sa can cast any of her abilities during the dash.",
        descriptionHTML:
          '<i>A nearby enemy champion affected by <span style="color: #AF1AAF; white-space:normal">Plasma</span> is required to cast this ability. Killer Instinct <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Kai\'Sa\'s</b> basic attack timer. <b>Kai\'Sa</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    notes:
      '* <b>Kai\'Sa</b> will issue a movement command to the targeted location regardless of whether the target location is valid. The dash is not buffered during this movement command. <b>Kai\'Sa</b> will not dash if the targeted location becomes valid by walking in range or a nearby enemy champion becomes affected by <span style="color: #AF1AAF; white-space:normal">Plasma</span>.\n<ul><li><ul><li>If the targeted location is not valid, the range indicator will glow.</li></ul></li>\n<li>The enemy champion recently affected by <span style="color: #AF1AAF; white-space:normal">Plasma</span> must be in range of <b>Kai\'Sa</b> for the targeted location to be valid, and not the targeted location itself.</li>\n<li>The basic attack reset is not considered one for <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.</li></ul>',
    yvideo: "Kai'Sa - R",
  },
} satisfies { [skillName in string]: SkillData };
