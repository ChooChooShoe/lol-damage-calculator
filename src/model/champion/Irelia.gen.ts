import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Irelia';

export default {
  'Ionian Fervor': {
    name: 'Ionian Fervor',
    display_name: 'Ionian Fervor',
    champion: 'Irelia',
    skill: 'I',
    image: {
      full: 'Irelia_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL" title="Irelia\'s"><img alt="Irelia\'s" src="/wiki/images/Irelia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL" title="Irelia/LoL">Irelia\'s</a></span></span> abilities generate stacks of <i>Ionian Fervor</i> for each champion hit, or if she hits at least one non-champion. Basic attacks against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> will also refresh the duration.',
      '<span class="template_sbc"><b>Innate - Unsteady:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Flawless Duet" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Flawless Duet"><img alt="Flawless Duet" src="/wiki/images/Irelia_Flawless_Duet.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Irelia/LoL">Flawless Duet</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Vanguard\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Vanguard\'s Edge\'s"><img alt="Vanguard\'s Edge\'s" src="/wiki/images/Irelia_Vanguard%27s_Edge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Irelia/LoL">Vanguard\'s Edge\'s</a></span></span></i> initial barrage are <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Bladesurge_2.png/revision/latest?cb=20200425064443" class="image"><img alt="Bladesurge 2.png" src="/wiki/images/Bladesurge_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> marked. The mark can be consumed by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge"><img alt="Bladesurge" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge</a></span></span></i>.',
      '<span class="template_sbc"><b>Ionian Fervor:</b></span> For each stack, <b>Irelia</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">bonus attack speed</span></span>. At maximum stacks, her basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. <br>Basic attacks against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> will also refresh the duration.',
    ],
    description: [
      {
        description:
          'Innate: Irelia generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy  champions and large  monsters, and stacking up to 4 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Irelia</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Ionian Fervor</i> for each enemy champion hit by her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and stacking up to 4 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: 'Irelia generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy  champions and large  monsters, and stacking up to 4 times.',
            min: 0,
            max: 4,
            description:
              'Irelia generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy  champions and large  monsters, and stacking up to 4 times.',
            values: 6,
            units: 'genericStacks',
            unitsText:
              'generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy  champions and large  monsters, and stacking up to 4 times.',
            pre: 'Irelia generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy  champions and large  monsters, and stacking up to 4 times.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Ionian_Fervor.png',
        description:
          "Ionian Fervor: For each stack, Irelia gains 7.5% − 20% (based on level)  bonus attack speed, up to a maximum of 30% − 80% (based on level). At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61 (based on level) (+ 20% bonus AD) bonus magic damage  on-hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Ionian Fervor:</b></span> For each stack, <b>Irelia</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="7.5;13.75;20" data-top_values="1;7;13" data-bot_key="%">7.<small>5</small>% − 20% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>, up to a maximum of <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="30;55;80" data-top_values="1;7;13" data-bot_key="%">30% − 80% (based on level)</span></span>. At maximum stacks, <b>Irelia\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="61;" data-bot_values="10;13;16;19;22;25;28;31;34;37;40;43;46;49;52;55;58;61" data-top_values="">10 − 61 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Ionian Fervor:',
            raw: 'For each stack, Irelia gains 7.5% − 20% (based on level)  bonus attack speed, up to a maximum of 30% − 80% (based on level)',
            min: 0,
            max: 10,
            description:
              'For each stack, Irelia gains 7.5% − 20% (based on level)  bonus attack speed, up to a maximum of 30% − 80% (based on level)',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed, up to a maximum of 30% − 80%',
            pre: 'For each stack, Irelia gains 7.5% − 20%',
            post: 'bonus attack speed, up to a maximum of 30% − 80%',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: "At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61 (based on level) (+ 20% bonus AD) bonus magic damage  on-hit.",
            min: 0,
            max: 10,
            description:
              "At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61 (based on level) (+ 20% bonus AD) bonus magic damage  on-hit.",
            values: [
              10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55,
              58, 61,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage  on-hit.',
            pre: "At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61",
            post: 'bonus magic damage  on-hit.',
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
      {
        icon: '/wiki/images/Bladesurge_2.png',
        description:
          "Innate - Unsteady: Enemy  champions and large  monsters hit by  Flawless Duet and  Vanguard's Edge's initial barrage are marked as Unsteady for 5 seconds. The mark can be consumed by  Bladesurge.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Unsteady:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Flawless Duet" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Flawless Duet"><img alt="Flawless Duet" src="/wiki/images/Irelia_Flawless_Duet.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Irelia/LoL">Flawless Duet</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Vanguard\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Vanguard\'s Edge\'s"><img alt="Vanguard\'s Edge\'s" src="/wiki/images/Irelia_Vanguard%27s_Edge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Irelia/LoL">Vanguard\'s Edge\'s</a></span></span></i> initial barrage are <span style="color: #AF1AAF; white-space:normal">marked</span> as <i>Unsteady</i> for 5 seconds. The mark can be consumed by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge"><img alt="Bladesurge" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Unsteady:',
            raw: "Enemy  champions and large  monsters hit by  Flawless Duet and  Vanguard's Edge's initial barrage are marked as Unsteady for 5 seconds",
            damagetype: 'None',
            values: 5,
            units: 'kindredMarks',
            unitsText:
              "champions and large  monsters hit by  Flawless Duet and  Vanguard's Edge's initial barrage are marked as Unsteady for 5 seconds",
            pre: "Enemy  champions and large  monsters hit by  Flawless Duet and  Vanguard's Edge's initial barrage are marked as Unsteady for 5 seconds",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: '<a href="/wiki/Self" class="mw-redirect" title="Self">Self</a>',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    notes:
      '* The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Parry interactions (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
    yvideo: 'Irelia - Passive',
  },
  Bladesurge: {
    name: 'Bladesurge',
    display_name: 'Bladesurge',
    champion: 'Irelia',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'IreliaQ.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '600',
    speed:
      '1400 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'none',
    cost: '20',
    costtype: 'Mana',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL" title="Irelia"><img alt="Irelia" src="/wiki/images/Irelia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL" title="Irelia/LoL">Irelia</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> through the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself.',
      'If this attack kills the target, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span>. Whenever a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Bladesurge_2.png/revision/latest?cb=20200425064443" class="image"><img alt="Bladesurge 2.png" src="/wiki/images/Bladesurge_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> mark is consumed, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bladesurge.png',
        description:
          "Active: Irelia  dashes 100 units through the target enemy's location, and upon collision or dash completion, she deals physical damage, applies  on-hit effects, and  heals herself. Bladesurge deals 55 − 259 (based on level) bonus physical damage to  minions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> 100 units through the target enemy\'s location, and upon collision or dash completion, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself. <i>Bladesurge</i> deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="55;" data-finish="259;" data-bot_values="55;67;79;91;103;115;127;139;151;163;175;187;199;211;223;235;247;259" data-top_values="">55 − 259 (based on level)</span> <b>bonus</b> physical damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: "Irelia  dashes 100 units through the target enemy's location, and upon collision or dash completion, she deals physical damage, applies  on-hit effects, and  heals herself",
            healType: 'PhysicalVamp',
            values: 1,
            units: 'total_ap',
            unitsText:
              "dashes 100 units through the target enemy's location, and upon collision or dash completion, she deals physical damage, applies  on-hit effects, and  heals herself",
            pre: "Irelia  dashes 100 units through the target enemy's location, and upon collision or dash completion, she deals physical damage, applies  on-hit effects, and  heals herself",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Bladesurge deals 55 − 259 (based on level) bonus physical damage to  minions.',
            damagetype: 'Physical',
            values: [
              55, 67, 79, 91, 103, 115, 127, 139, 151, 163, 175, 187, 199, 211,
              223, 235, 247, 259,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage to  minions.',
            pre: 'Bladesurge deals 55 − 259',
            post: 'bonus physical damage to  minions.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '5 / 25 / 45 / 65 / 85 (+ 60% AD)',
            valuesHTML:
              '5 / 25 / 45 / 65 / 85 <span style="color:orange; white-space:normal">(+&nbsp;60% AD)</span>',
          },
          {
            name: 'Heal:',
            values: '9 / 10 / 11 / 12 / 13% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">9 / 10 / 11 / 12 / 13% AD</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '5 / 25 / 45 / 65 / 85 (+ 60% AD)',
            damagetype: 'Physical',
            values: [5, 25, 45, 65, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 25 / 45 / 65 / 85',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 60% AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '9 / 10 / 11 / 12 / 13% AD',
            healType: 'DrainEffect',
            values: [9, 10, 11, 12, 13],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '9 / 10 / 11 / 12 / 13% AD',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Bladesurge's  current cooldown is reduced to 0.2 seconds upon collision of targets marked as  Unsteady, and is reset if the target dies to or during Bladesurge's dash.",
        descriptionHTML:
          '<i>Bladesurge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced to 0.<small>2</small> seconds upon collision of targets <span style="color: #AF1AAF; white-space:normal">marked</span> as <i><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Unsteady"><img alt="Unsteady" src="/wiki/images/Bladesurge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Irelia/LoL">Unsteady</a></span></span></i>, and is reset if the target dies to or during <i>Bladesurge\'s</i> dash.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Flawless Duet can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Flawless Duet" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Flawless Duet"><img alt="Flawless Duet" src="/wiki/images/Irelia_Flawless_Duet.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Irelia/LoL">Flawless Duet</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype: 'Physical',
    spelleffects: 'basic',
    onhiteffects: 'True',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* <i>Bladesurge</i> will be buffered and cast when the cooldown ends or is reset if the player attempts to cast it within 0.<small>5</small> seconds of the cooldown ending/resetting.\n<ul><li><i>Bladesurge</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.</li>\n<li>If the target dies during <i>Bladesurge\'s</i> dash, <b>Irelia</b> may cast her other abilities during the dash.</li>\n<li>If the target dies to <i>Bladesurge</i> and was also <span style="color: #AF1AAF; white-space:normal">marked</span>, the cooldown is still fully refunded.</li>\n<li><i>Bladesurge</i> will only allow <b>Irelia</b> to dash through walls if there is enough space for her on the other side.</li>\n<li><i>Bladesurge</i> deals its damage and consumes <span style="color: #AF1AAF; white-space:normal">marks</span> when <b>Irelia</b> collides with the target, or at the end of the dash if the target moves away.\n<ul><li><i>Bladesurge</i> will not deal damage if the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> beforehand.\n<ul><li>The damage will be dealt if the target is in collision range when the dash is interrupted however.</li>\n<li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> will interrupt the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> but <b>Irelia</b> will still collide with and deal damage to her target if the blink leaves her in contact with it at the new location.</li></ul></li>\n<li><b>Irelia</b> will complete her remaining dash distance even if the damage is dealt earlier.</li>\n<li>If the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <i>Bladesurge</i> will instead deals its damage at the end of the dash, rather than on collision.</li></ul></li></ul>',
    yvideo: 'Irelia - Q',
  },
  'Defiant Dance': {
    name: 'Defiant Dance',
    display_name: 'Defiant Dance',
    champion: 'Irelia',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'IreliaW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '775 / 895',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast point blank radius">300</span> /  <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast \'lollipop\' radius at end of missile range">120</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast swipe missile width">240</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active">None</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast">0.<small>25</small></span>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">20 / 18 / 16 / 14 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL" title="Irelia"><img alt="Irelia" src="/wiki/images/Irelia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL" title="Irelia/LoL">Irelia</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up for a brief moment, during which she reduces incoming <span style="color: #FF8C34; white-space:normal">physical damage</span>.<br><br>\n<p><i>Defiant Dance</i> can be recast within the duration, and does so automatically afterwards. The charge cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.\n</p>',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Irelia</b> swipes her blades in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies nearby and within a line, increased based on how long she charged up.',
    ],
    description: [
      {
        icon: '/wiki/images/Defiant_Dance.png',
        description:
          "Active: Irelia  charges for up to 1.5 seconds, during which she increases Defiant Dance's damage over the first 0.75 seconds of the channel and reduces incoming physical damage by 40% − 70% (based on level) (+ 7% per 100 AP) and incoming magic damage by 20% − 35% (based on level) (+ 3.5% per 100 AP).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 1.<small>5</small> seconds, during which she increases <i>Defiant Dance\'s</i> damage over the first 0.<small>75</small> seconds of the channel and reduces incoming <span style="color: #FF8C34; white-space:normal">physical damage</span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="70;" data-bot_values="40;41.76;43.53;45.29;47.06;48.82;50.59;52.35;54.12;55.88;57.65;59.41;61.18;62.94;64.71;66.47;68.24;70" data-top_values="" data-bot_key="%">40% − 70% (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% per 100 AP)</span> and incoming <span style="color: #00B0F0; white-space:normal">magic damage</span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="35;" data-bot_values="20;20.88;21.76;22.65;23.53;24.41;25.29;26.18;27.06;27.94;28.82;29.71;30.59;31.47;32.35;33.24;34.12;35" data-top_values="" data-bot_key="%">20% − 35% (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3.<small>5</small>% per 100 AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "Irelia  charges for up to 1.5 seconds, during which she increases Defiant Dance's damage over the first 0.75 seconds of the channel and reduces incoming physical damage by 40% − 70% (based on level) (+ 7% per 100 AP) and incoming magic damage by 20% − 35% (based on level) (+ 3.5% per 100 AP).",
            damagetype: 'Physical',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'and incoming magic damage by 20% − 35%',
            pre: "Irelia  charges for up to 1.5 seconds, during which she increases Defiant Dance's damage over the first 0.75 seconds of the channel and reduces incoming physical damage by 40% − 70%",
            post: 'and incoming magic damage by 20% − 35%',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 7% per 100 AP',
              },
              {
                values: 3.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3.5% per 100 AP',
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
          "Defiant Dance can be recast within the duration, and does so automatically afterwards. Defiant Dance's charge cannot be  interrupted by  crowd control.",
        descriptionHTML:
          '<i>Defiant Dance</i> can be recast within the duration, and does so automatically afterwards. <i>Defiant Dance\'s</i> charge cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Irelia swipes her blades in the target direction, dealing physical damage to enemies around her and within a line, increased by 0% − 200% (based on channel time). She also retains the damage reduction for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Irelia</b> swipes her blades in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies around her and within a line, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="20% per 0.075 seconds. \'\'This is capped at 0.75 seconds.\'\'" data-bot_values="0;20;40;60;80;100;120;140;160;180;200" data-top_values="0;0.08;0.15;0.23;0.3;0.38;0.45;0.53;0.6;0.68;0.75" data-bot_key="%">0% − 200% (based on channel time)</span>. She also retains the damage reduction for 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values: '10 / 25 / 40 / 55 / 70 (+ 40% AD) (+ 40% AP)',
            valuesHTML:
              '10 / 25 / 40 / 55 / 70 <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '10 / 25 / 40 / 55 / 70 (+ 40% AD) (+ 40% AP)',
            damagetype: 'Physical',
            values: [10, 25, 40, 55, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 25 / 40 / 55 / 70',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Defiant Dance's recast can be used while affected by  cast-inhibiting crowd control. If  Ionian Fervor would expire during the charge, it will instead refresh every 0.25 seconds for the remaining charge and be retained for 0.5 seconds after the recast is initiated.",
        descriptionHTML:
          '<i>Defiant Dance\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>. If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Ionian Fervor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Ionian Fervor"><img alt="Ionian Fervor" src="/wiki/images/Irelia_Ionian_Fervor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Irelia/LoL">Ionian Fervor</a></span></span> would expire during the charge, it will instead refresh every 0.<small>25</small> seconds for the remaining charge and be retained for 0.<small>5</small> seconds after the recast is initiated.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects:
      '<a href="/wiki/Self" class="mw-redirect" title="Self">Self</a> / Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* Enemies around <b>Irelia</b> will be dealt the damage once the recast\'s cast time ends, while enemies within the line are dealt the damage via a missile that reaches the furthest targets after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.05 seconds, but rounded up to the next game tick.">0.<small>066</small> seconds</span> delay after the recast\'s cast time.\n<ul><li>Quick Casting utilizes hold-and-release for the two casts.</li>\n<li><i>Defiant Dance</i> reaches 100% physical damage reduction at <span style="color: #7A6DFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="857.14;" data-finish="428.57;" data-bot_values="857.14;831.93;806.72;781.51;756.3;731.09;705.88;680.67;655.46;630.25;605.04;579.83;554.62;529.41;504.2;478.99;453.78;428.57" data-top_values="">857.<small>14</small> − 428.<small>57</small> (based on level)</span> AP</span>.</li>\n<li><i>Defiant Dance</i> reaches 100% magic damage reduction at <span style="color: #7A6DFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2285.71;" data-finish="1857.14;" data-bot_values="2285.71;2260.5;2235.29;2210.08;2184.87;2159.66;2134.45;2109.24;2084.03;2058.82;2033.61;2008.4;1983.19;1957.98;1932.77;1907.56;1882.35;1857.14" data-top_values="">2285.<small>71</small> − 1857.<small>14</small> (based on level)</span> AP</span>.</li>\n<li><i>Defiant Dance</i> will also recast automatically upon entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>This refers to the recast.</li></ul></li>\n<li>The following table refers for interactions while <b>Irelia</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but can still use trinkets\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    yvideo: 'Irelia - W',
  },
  'Flawless Duet': {
    name: 'Flawless Duet',
    display_name: 'Flawless Duet',
    champion: 'Irelia',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'IreliaE.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '775',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Blade convergence range">Global</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> Convergence hit width',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed to location">2000</span>',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">16 / 15 / 14 / 13 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL" title="Irelia"><img alt="Irelia" src="/wiki/images/Irelia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL" title="Irelia/LoL">Irelia</a></span></span> sends a blade to the target location for a short time.<br><br>\n<p><i>Flawless Duet</i> can be recast within the duration, and does so automatically after the duration. The recast cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.\n</p>',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Irelia</b> sends a second blade to the target location, or to her current position if <i>Flawless Duet</i> was recast automatically.',
      'Once both blades have been placed, they converge to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> enemies within a line between.',
    ],
    description: [
      {
        icon: '/wiki/images/Flawless_Duet.png',
        description:
          'Active: Irelia sends a blade to the target location for 3.5 seconds. Flawless Duet can be recast after 0.15 seconds while the blade is active, and does so automatically at the end of its duration, though not if she is unable to cast abilities.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> sends a blade to the target location for 3.<small>5</small> seconds. <i>Flawless Duet</i> can be recast after 0.<small>15</small> seconds while the blade is active, and does so automatically at the end of its duration, though not if she is unable to cast abilities.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Irelia sends a blade to the target location for 3.5 seconds',
            damagetype: 'None',
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText: 'sends a blade to the target location for 3.5 seconds',
            pre: 'Irelia sends a blade to the target location for 3.5 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Irelia_Flawless_Duet_2.png',
        description:
          'Recast: Irelia sends a second blade to the target location, or to her current position if Flawless Duet was recast automatically.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Irelia</b> sends a second blade to the target location, or to her current position if <i>Flawless Duet</i> was recast automatically.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Once both blades have been placed, they fly toward each other regardless of distance and converge over 0.25 seconds, afterwards dealing magic damage to all enemies within a line between them and  stunning them for 0.75 seconds, during which they are  revealed.',
        descriptionHTML:
          'Once both blades have been placed, they fly toward each other regardless of distance and converge over 0.<small>25</small> seconds, afterwards dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within a line between them and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
      {
        icon: '/wiki/images/undefined',
        description:
          "Flawless Duet's recast can be used during  Bladesurge and the cast time of  Vanguard's Edge. Each of the blades' travel times are 0.264 seconds. Flawless Duet will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>Flawless Duet\'s recast can be used during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge"><img alt="Bladesurge" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge</a></span></span> and the cast time of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Vanguard\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Vanguard\'s Edge"><img alt="Vanguard\'s Edge" src="/wiki/images/Irelia_Vanguard%27s_Edge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Irelia/LoL">Vanguard\'s Edge</a></span></span>. Each of the blades\' travel times are <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>. Flawless Duet will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
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
      '* Both casts count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>If the ability is not manually recasted, the secondary effect will trigger and it will be considered as an ability activation. This is the only ability with this interaction in the game.</li></ul></li>\n<li><i>Flawless Duet</i> will recast automatically at its end during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Defiant Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Defiant_Dance" title="Defiant Dance"><img alt="Defiant Dance" src="/wiki/images/Irelia_Defiant_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Defiant_Dance" title="Irelia/LoL">Defiant Dance</a></span></span> despite being disabled.</li>\n<li><i>Flawless Duet</i> will also recast automatically upon entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>The blades will not stun nor deal damage if they fail to converge (i.e <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo\'s"><img alt="Yasuo\'s" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span></span>).</li>\n<li>Both of <i>Flawless Duet\'s</i> casts will be buffered and cast when their cooldowns end if the player attempts to cast each within 0.<small>3</small> seconds of their cooldown ending.</li></ul>',
    yvideo: 'Irelia - E',
  },
  "Vanguard's Edge": {
    name: "Vanguard's Edge",
    display_name: "Vanguard's Edge",
    champion: 'Irelia',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'IreliaR.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 320',
    speed: '2000',
    cast_time: '0.<small>4</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '140 / 130 / 120 / 110 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL" title="Irelia"><img alt="Irelia" src="/wiki/images/Irelia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL" title="Irelia/LoL">Irelia</a></span></span> launches a barrage of blades in the target direction that expand outward upon hitting an enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      'After expanding, the blades form a spade-shaped perimeter around the enemy champion hit for a short time. Enemies that pass through the blades for the first time are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        description:
          "Passive:  Bladesurge's  total cooldown is reduced by a flat amount.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge\'s"><img alt="Bladesurge\'s" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge\'s</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span> is reduced by a flat amount.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Flat Cooldown Reduction:',
            values: '0.5 / 1 / 1.5 / 2 / 2.5',
            valuesHTML:
              '0.<small>5</small> / 1 / 1.<small>5</small> / 2 / 2.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Flat Cooldown Reduction:',
            raw: '0.5 / 1 / 1.5 / 2 / 2.5',
            values: [0.5, 1, 1.5, 2, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.5 / 1 / 1.5 / 2 / 2.5',
          },
        ],
      },
      {
        icon: "/wiki/images/Vanguard's_Edge.png",
        description:
          'Active: Irelia launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing magic damage to all enemies hit and  revealing them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Irelia launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing magic damage to all enemies hit and  revealing them for 1 second.',
            damagetype: 'Magic',
            values: 1,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing magic damage to all enemies hit and  revealing them for 1 second.',
            pre: 'Irelia launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing magic damage to all enemies hit and  revealing them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '125 / 187.5 / 250 / 312.5 / 375 (+ 70% AP)',
            valuesHTML:
              '125 / 187.<small>5</small> / 250 / 312.<small>5</small> / 375 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 187.5 / 250 / 312.5 / 375 (+ 70% AP)',
            damagetype: 'Magic',
            values: [125, 187.5, 250, 312.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 187.5 / 250 / 312.5 / 375',
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
        icon: '/wiki/images/undefined',
        description:
          'After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them  airborne, and forming a spade-shaped perimeter around the enemy champion hit for 2.5 seconds that grants  sight of its surroundings. Enemies that pass through the blades for the first time are dealt the same magic damage and are  slowed by 90% for 1.5 seconds.',
        descriptionHTML:
          'After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, and forming a spade-shaped perimeter around the enemy champion hit for 2.<small>5</small> seconds that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. Enemies that pass through the blades for the first time are dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90% for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them  airborne, and forming a spade-shaped perimeter around the enemy champion hit for 2.5 seconds that grants  sight of its surroundings',
            increasedStat: 'total_ap',
            values: 2,
            units: '',
            unitsText:
              'expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them  airborne, and forming a spade-shaped perimeter around the enemy champion hit for 2.5 seconds that grants  sight of its surroundings',
            pre: 'After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them  airborne, and forming a spade-shaped perimeter around the enemy champion hit for 2.5 seconds that grants  sight of its surroundings',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies that pass through the blades for the first time are dealt the same magic damage and are  slowed by 90% for 1.5 seconds.',
            damagetype: 'Magic',
            values: 9,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'for 1.5 seconds.that pass through the blades for the first time are dealt the same magic damage and are  slowed by 90',
            pre: 'Enemies that pass through the blades for the first time are dealt the same magic damage and are  slowed by 90% for 1.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The perimeter will point at the same angle Irelia casted it from, but based on the target's center.",
        descriptionHTML:
          "<i>The perimeter will point at the same angle <b>Irelia</b> casted it from, but based on the target's center.</i>",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge\'s"><img alt="Bladesurge\'s" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge\'s</a></span></span> cooldown reduction applies before <a href="/wiki/Ability_haste" class="mw-redirect" title="Ability haste">ability haste</a>.\n<ul><li>Enemies that cross the perimeter are <b>not</b> <span style="color: #AF1AAF; white-space:normal">marked</span> for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge"><img alt="Bladesurge" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge</a></span></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Irelia_Original_R_2.ogg   "Ionia calls!"',
    yvideo: 'Irelia - R',
  },
} satisfies { [skillName in string]: SkillData };
