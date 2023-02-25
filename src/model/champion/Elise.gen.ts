import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Elise';

export default {
  'Spider Queen': {
    name: 'Spider Queen',
    display_name: 'Spider Queen',
    champion: 'Elise',
    skill: 'I',
    image: {
      full: 'ElisePassive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> The rank of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Form / Human Form" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Form_/_Human_Form" title="Spider Form / Human Form"><img alt="Spider Form / Human Form" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Form_/_Human_Form" title="Elise/LoL">Spider Form / Human Form</a></span></span> affects the power of <i>Spider Queen</i>.',
      '<a href="/wiki/Elise#Human_Form" title="Human Form"><img alt="Human Form" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Human Form: Whenever <b>Elise\'s</b> abilities hit an enemy, she gains a dormant <i>Spiderling</i>, up to a cap.',
      '<a href="/wiki/Elise#Spider_Form" title="Spider Form"><img alt="Spider Form" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Spider Form: <b>Elise\'s </b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus </b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> her.',
    ],
    description: [
      {
        icon: '/wiki/images/Spider Queen.png',
        description:
          "Innate - Human Form: Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing up to 2 / 3 / 4 / 5 (based on  Human Form's Rank) at a time.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Human Form:</b></span> <b>Elise</b> gains one dormant <i>Spiderling</i> whenever she hits an enemy with an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, storing up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Elise OriginalSquare.png|20px|link=]] Human Form\'s Rank" data-start="2;" data-finish="5;" data-bot_values="2;3;4;5" data-top_values="">2 / 3 / 4 / 5 (based on <img alt="Elise OriginalSquare.png" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Human Form\'s</i> Rank)</span> at a time.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Human Form:',
            raw: " Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing up to 2 / 3 / 4 / 5 (based on  Human Form's Rank) at a time.",
            values: [2, 3, 4, 5],
            basedOn: " Human Form's Rank",
            user: 'none',
            units: '',
            unitsText: 'at a time.',
            pre: 'Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing up to 2 / 3 / 4 / 5',
            post: 'at a time.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Innate - Spider Form: Elise's basic attacks deal 10 / 20 / 30 / 40 (based on  Spider Form's Rank) (+ 20% AP) bonus magic damage and  heal her for 4 / 6 / 8 / 10 (based on  Spider Form's Rank) (+ 8% AP)  on-hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Spider Form:</b></span> <b>Elise\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-top_label="[[File:Spider Form.png|20px|link=]] Spider Form\'s Rank" data-start="10;" data-finish="40;" data-bot_values="10;20;30;40" data-top_values="">10 / 20 / 30 / 40 (based on <img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> Spider Form\'s Rank)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> her for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Spider Form.png|20px|link=]] Spider Form\'s Rank" data-start="4;" data-finish="10;" data-bot_values="4;6;8;10" data-top_values="">4 / 6 / 8 / 10 (based on <img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Spider Form\'s</i> Rank)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8% AP)</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate - Spider Form:',
            raw: " Elise's basic attacks deal 10 / 20 / 30 / 40 (based on  Spider Form's Rank) (+ 20% AP) bonus magic damage and  heal her for 4 / 6 / 8 / 10 (based on  Spider Form's Rank) (+ 8% AP)  on-hit.",
            healType: 'BonusHealth',
            values: [1, 20, 30, 40],
            basedOn: " Spider Form's Rank",
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage and  heal her for 4 / 6 / 8 / 10',
            pre: "Elise's basic attacks deal 10 / 20 / 30 / 40",
            post: 'bonus magic damage and  heal her for 4 / 6 / 8 / 10',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
              {
                values: 8,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 8% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'See Pets for more details about Spiderlings.',
        descriptionHTML:
          '<i>See <a href="/wiki/Elise/LoL#Pets" title="Elise/LoL">Pets</a> for more details about Spiderlings.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: '',
    damagetype: 'Magic',
    spelleffects: 'Special',
    onhiteffects: 'Special',
    occurrence: 'On-hit',
    notes:
      '* <i>Spider Form\'s</i> effects do not apply to <a href="/wiki/Structure" class="mw-redirect" title="Structure">structures</a>.\n<ul><li><b>Elise</b> will always begin the game and respawn with maximum available <i>Spiderlings</i> stored.</li>\n<li><b>Elise\'s</b> <a href="/wiki/Elise#Human_Form" title="Human Form"><img alt="Human Form" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <a href="/wiki/Elise#Spider_Form_/_Human_Form" title="Elise">Human Form</a> ability casts can only store one <i>Spiderling</i> each.</li>\n<li>The <i>Spiderlings</i> have a <a href="/wiki/Pets#Leash_ranges" title="Pets">leash range</a>.</li>\n<li><i>Spider Form\'s</i> basic attacks will apply other <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal (the <b>bonus</b> damage does not).\n<ul><li><i>Spider Form\'s</i> bonus damage and healing can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> and are not applied if <b>Elise</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>.</li></ul></li>\n<li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> on the bonus magic damage on-hit in <i>Spider Form</i>.</li>\n<li>The <i>Spiderlings</i> apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.</li></ul>',
    video: 'Elise IVideo.ogv',
  },
  Neurotoxin: {
    name: 'Neurotoxin',
    display_name: 'Neurotoxin',
    champion: 'Elise',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'EliseHumanQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '575',
    cast_time: '0.<small>25</small>',
    cost: '80 / 85 / 90 / 95 / 100',
    costtype: 'Mana',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise"><img alt="Elise" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise</a></span></span> fires a toxin at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>current</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Neurotoxin.png',
        description:
          "Active: Elise fires a toxin at the target enemy that deals magic damage, with the damage based on the target's health ratio being capped against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> fires a toxin at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, with the damage based on the target\'s health ratio being capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "40 / 75 / 110 / 145 / 180 (+ 4% (+ 3% per 100 AP) of target's current health)",
            valuesHTML:
              '40 / 75 / 110 / 145 / 180 <span style="color: #1F995C; white-space:normal">(+&nbsp;4% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% per 100 AP)</span> of target\'s <b>current</b> health)</span>',
          },
          {
            name: 'Capped Monster Damage:',
            values: '75 / 100 / 125 / 150 / 175',
            valuesHTML: '75 / 100 / 125 / 150 / 175',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "40 / 75 / 110 / 145 / 180 (+ 4% (+ 3% per 100 AP) of target's current health)",
            healType: 'OutgoingHeals',
            values: [40, 75, 110, 145, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 75 / 110 / 145 / 180',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of target's current health",
                pre: '+ 4%',
                post: "of target's current health",
                children: [
                  {
                    values: 3,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 3% per 100 AP',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Capped Monster Damage:',
            raw: '75 / 100 / 125 / 150 / 175',
            damagetype: 'None',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'single',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
    video: 'Elise QVideo.ogv',
  },
  'Venomous Bite': {
    name: 'Venomous Bite',
    display_name: 'Venomous Bite',
    champion: 'Elise',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'EliseHumanQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '475',
    cast_time: '0.<small>25</small>',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise"><img alt="Elise" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounces</a></span> at the target enemy and deals damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>, applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects.',
      'If there are active <i>Spiderlings</i> or <i>Volatile Spiderlings</i> nearby, they will pounce with <b>Elise</b> and attack the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Venomous Bite.png',
        description:
          "Active: Elise  pounces at the target enemy with her fangs and bites them, dealing magic damage and applying  on-hit effects at 100% effectiveness. The damage based on the target's health ratio is capped against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounces</a></span> at the target enemy with her fangs and bites them, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness. The damage based on the target\'s health ratio is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Elise  pounces at the target enemy with her fangs and bites them, dealing magic damage and applying  on-hit effects at 100% effectiveness',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness pounces at the target enemy with her fangs and bites them, dealing magic damage and applying  on-hit effects at 100',
            pre: 'Elise  pounces at the target enemy with her fangs and bites them, dealing magic damage and applying  on-hit effects at 100% effectiveness',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "70 / 105 / 140 / 175 / 210 (+ 8% (+ 3% per 100 AP) of target's missing health)",
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #1F995C; white-space:normal">(+&nbsp;8% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% per 100 AP)</span> of target\'s <b>missing</b> health)</span>',
          },
          {
            name: 'Capped Monster Damage:',
            values: '75 / 100 / 125 / 150 / 175',
            valuesHTML: '75 / 100 / 125 / 150 / 175',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "70 / 105 / 140 / 175 / 210 (+ 8% (+ 3% per 100 AP) of target's missing health)",
            healType: 'OutgoingHeals',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: '+ 8%',
                post: "of target's missing health",
                children: [
                  {
                    values: 3,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 3% per 100 AP',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Capped Monster Damage:',
            raw: '75 / 100 / 125 / 150 / 175',
            damagetype: 'None',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
          },
        ],
      },
      {
        description:
          "If there are active  Spiderlings or  Volatile Spiderlings nearby, they will  dash alongside Elise towards Venomous Bite's target and reprioritize them.",
        descriptionHTML:
          'If there are active <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Volatile Spiderling" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Volatile_Spiderling" title="Volatile Spiderlings"><img alt="Volatile Spiderlings" src="/wiki/images/Elise_Volatile_Spiderling.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Volatile_Spiderling" title="Elise/LoL">Volatile Spiderlings</a></span></span></i> nearby, they will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> alongside <b>Elise</b> towards <i>Venomous Bite\'s</i> target and reprioritize them.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <i>Venomous Bite</i> cannot be used to cross walls or impassable terrain.\n<ul><li><ul><li>The target will be damaged regardless.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span> can cross walls and terrain to reach <i>Venomous Bite\'s</i> target and will attack provided <b>Elise</b> stays within their <a href="/wiki/Pets#Leash_range" title="Pets">leash range</a>.</li></ul></li></ul></li>\n<li>There is a maximum range in which <i>Spiderlings</i> or <i>Volatile Spiderlings</i> can dash to the target.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span> will dash even if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd controlled</a></span>.</li>\n<li><i>Venomous Bite</i> will always apply its effects after the cast time, even if the dash is interrupted.</li>\n<li><b>Elise</b> will not dash if the target is within basic attack range.</li>\n<li><i>Venomous Bite</i> will still deal its damage but not apply on-hit effects if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>. It cannot be missed while <b>Elise</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    video: 'Elise QVideo.ogv',
  },
  'Volatile Spiderling': {
    name: 'Volatile Spiderling',
    display_name: 'Volatile Spiderling',
    champion: 'Elise',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'EliseHumanW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '950',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Nearby units detection radius">150</span>',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Explosion radius">275</span>',
    cast_time: '0.<small>125</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise"><img alt="Elise" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise</a></span></span> sends a <i>Volatile Spiderling</i> to the target location that explodes when it hits an enemy or times out.',
      'If the <i>Spiderling</i> does not hit an enemy before then, it will chase down a nearby enemy.',
    ],
    description: [
      {
        icon: '/wiki/images/Volatile Spiderling.png',
        description:
          'Active: Elise summons a venom-gorged spider for 3 seconds, which is  untargetable and crawls to the target location, navigating its path upon encountering terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> summons a venom-gorged spider for 3 seconds, which is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and crawls to the target location, navigating its path upon encountering terrain.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Elise summons a venom-gorged spider for 3 seconds, which is  untargetable and crawls to the target location, navigating its path upon encountering terrain.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'summons a venom-gorged spider for 3 seconds, which is  untargetable and crawls to the target location, navigating its path upon encountering terrain.',
            pre: 'Elise summons a venom-gorged spider for 3 seconds, which is  untargetable and crawls to the target location, navigating its path upon encountering terrain.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The spider explodes upon contact with an enemy or at the end of its lifespan, dealing magic damage to nearby enemies.',
        descriptionHTML:
          'The spider explodes upon contact with an enemy or at the end of its lifespan, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 105 / 150 / 195 / 240 (+ 95% AP)',
            valuesHTML:
              '60 / 105 / 150 / 195 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;95% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 95% AP)',
            damagetype: 'Magic',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
            children: [
              {
                values: 95,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 95% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'If the spider does not hit an enemy before reaching the target location, it chases down a nearby enemy, prioritizing  champions and gaining  bonus movement speed based on its proximity to the target.',
        descriptionHTML:
          'If the spider does not hit an enemy before reaching the target location, it chases down a nearby enemy, prioritizing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> based on its proximity to the target.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* If <i>Volatile Spiderling</i> dashes to a target due to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Venomous Bite" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Venomous_Bite" title="Venomous Bite"><img alt="Venomous Bite" src="/wiki/images/Elise_Venomous_Bite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Venomous_Bite" title="Elise/LoL">Venomous Bite</a></span></span>, it will not expire before finishing its jump.\n<ul><li><ul><li>It can still collide with enemies while dashing, but since this proximity check is repeated only every so often, it might phase through an enemy on its way without detecting the collision if dashing quickly enough.</li></ul></li>\n<li>The spiderling checks for nearby targets every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>, both for potential enemies to chase down and to explode \'on-contact\'. Because of this, it may walk closer to an enemy than its "collision radius" before exploding.</li></ul>',
    video: 'Elise WVideo.ogv',
  },
  'Skittering Frenzy': {
    name: 'Skittering Frenzy',
    display_name: 'Skittering Frenzy',
    champion: 'Elise',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'EliseHumanW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">10</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise"><img alt="Elise" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise</a></span></span> and her <i>Spiderlings</i> gain permanent <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed.</span></span>',
      '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> and her <i>Spiderlings</i> gain <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed.</span></span> for a short time.',
      '<i>Skittering Frenzy will end early if <b>Elise</b> switches forms.</i>',
    ],
    description: [
      {
        description: "Passive: Elise's  Spiderlings gain  bonus attack speed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Elise\'s</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Spiderling Bonus Attack Speed:',
            values: '5 / 10 / 15 / 20 / 25%',
            valuesHTML: '5 / 10 / 15 / 20 / 25%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Spiderling Bonus Attack Speed:',
            raw: '5 / 10 / 15 / 20 / 25%',
            values: [5, 10, 15, 20, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25%',
          },
        ],
      },
      {
        icon: '/wiki/images/Skittering Frenzy.png',
        description:
          'Active: Elise and her  Spiderlings gain bonus attack speed for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> gain <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Elise and her  Spiderlings gain bonus attack speed for 3 seconds.',
            increasedStat: 'bonus_ad',
            values: 3,
            units: '',
            unitsText:
              'and her  Spiderlings gain bonus attack speed for 3 seconds.',
            pre: 'Elise and her  Spiderlings gain bonus attack speed for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '60 / 70 / 80 / 90 / 100%',
            valuesHTML: '60 / 70 / 80 / 90 / 100%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '60 / 70 / 80 / 90 / 100%',
            values: [60, 70, 80, 90, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 70 / 80 / 90 / 100%',
          },
        ],
      },
      {
        description:
          "Skittering Frenzy  resets Elise's basic attack timer. Elise loses Skittering Frenzy immediately when she switches to  Human Form.",
        descriptionHTML:
          '<i>Skittering Frenzy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Elise\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> timer. <b>Elise</b> loses Skittering Frenzy immediately when she switches to <a href="/wiki/Elise#Human_Form" title="Human Form"><img alt="Human Form" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <a href="/wiki/Elise#Spider_Form_/_Human_Form" title="Elise">Human Form</a>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Spiderlings, Self',
    notes: '* No additional details.',
    video: 'Elise WVideo.ogv',
  },
  Cocoon: {
    name: 'Cocoon',
    display_name: 'Cocoon',
    champion: 'Elise',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'EliseHumanE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 110',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise"><img alt="Elise" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise</a></span></span> fires a web in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the first enemy hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Cocoon.png',
        description:
          'Active: Elise fires a web in the target direction,  stunning the first enemy hit for a few seconds, during which they are also  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> fires a web in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> the first enemy hit for a few seconds, during which they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Stun Duration:',
            values: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            valuesHTML:
              '1.<small>6</small> / 1.<small>7</small> / 1.<small>8</small> / 1.<small>9</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            values: [1.6, 1.7, 1.8, 1.9, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.6 / 1.7 / 1.8 / 1.9 / 2',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><i>Cocoon</i> deals no damage and thus does <b>not</b> trigger <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> aggro, or effects such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery"><img alt="Elixir of Sorcery" src="/wiki/images/Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery">Elixir of Sorcery</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Sudden Impact" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sudden_Impact" title="Sudden Impact\'s"><img alt="Sudden Impact\'s" src="/wiki/images/Sudden_Impact_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Sudden_Impact" title="Sudden Impact">Sudden Impact\'s</a></span></span> activation.</li></ul>',
    video: 'Elise EVideo.ogv',
  },
  Rappel: {
    name: 'Rappel',
    display_name: 'Rappel',
    champion: 'Elise',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'EliseHumanE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 700',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">22 / 21 / 20 / 19 / 18</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise"><img alt="Elise" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise</a></span></span> and her <i>Spiderlings</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanish</a></span> into the air for a short time.<br><br>\n<p><i>Rappel</i> can be recast on a target enemy within the duration, and does so automatically after the duration without a target.\n</p>',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Elise</b> and her <i>Spiderlings</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">descend</a></span> upon the target enemy, or their current position if there is no target.',
      'If <i>Rappel</i> is cast directly on a target enemy, she will automatically recast upon the target and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spider Queen\'s"><img alt="Spider Queen\'s" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spider Queen\'s</a></span></span> effects are increased for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Rappel.png',
        description:
          'Active: Elise and her  Spiderlings lift up into the air,  vanishing and becoming  unable to act for up to 2 seconds and granting  sight of the area for the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> lift up into the air, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> for up to 2 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for the duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Elise and her  Spiderlings lift up into the air,  vanishing and becoming  unable to act for up to 2 seconds and granting  sight of the area for the duration.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'and her  Spiderlings lift up into the air,  vanishing and becoming  unable to act for up to 2 seconds and granting  sight of the area for the duration.',
            pre: 'Elise and her  Spiderlings lift up into the air,  vanishing and becoming  unable to act for up to 2 seconds and granting  sight of the area for the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Rappel can be recast on a target enemy within the duration, and does so automatically after the duration without a target.',
        descriptionHTML:
          '<i>Rappel</i> can be recast on a target enemy within the duration, and does so automatically after the duration without a target.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Recast: Elise and her  Spiderlings instantly  descend behind the target, or their current position if there is no target.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> instantly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">descend</a></span> behind the target, or their current position if there is no target.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "If cast directly on an enemy, Elise and her  Spiderlings automatically recast on the target after 1 second. Upon landing this way,  Spider Queen's bonuses are increased for 5 seconds.",
        descriptionHTML:
          'If cast directly on an enemy, <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> automatically recast on the target after 1 second. Upon landing this way, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spider Queen\'s"><img alt="Spider Queen\'s" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spider Queen\'s</a></span></span></i> bonuses are increased for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If cast directly on an enemy, Elise and her  Spiderlings automatically recast on the target after 1 second',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'cast directly on an enemy, Elise and her  Spiderlings automatically recast on the target after 1 second',
            pre: 'If cast directly on an enemy, Elise and her  Spiderlings automatically recast on the target after 1 second',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "Upon landing this way,  Spider Queen's bonuses are increased for 5 seconds.",
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              "landing this way,  Spider Queen's bonuses are increased for 5 seconds.",
            pre: "Upon landing this way,  Spider Queen's bonuses are increased for 5 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Spider Effects Increase:',
            values: '40 / 55 / 70 / 85 / 100%',
            valuesHTML: '40 / 55 / 70 / 85 / 100%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Spider Effects Increase:',
            raw: '40 / 55 / 70 / 85 / 100%',
            values: [40, 55, 70, 85, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100%',
          },
        ],
      },
      {
        description:
          "Rappel's recast can be used while affected by  cast-inhibiting crowd control.",
        descriptionHTML:
          '<i>Rappel\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a>',
    affects: 'Self, Enemies',
    notes:
      '* When <b>Elise</b> casts <i>Rappel</i>, a circle outlines the area in which a target can be selected to descend upon.\n<ul><li><ul><li>She cannot descend outside the bounds of this circle.</li></ul></li>\n<li><b>Elise</b> will descend behind her target with <i>Rappel\'s</i> recast.\n<ul><li>If the target is at the edge of the circle, she will descend as close as possible to the target.</li></ul></li>\n<li>The buff granted from casting directly on an enemy is not lost if <b>Elise</b> switches to <i>Human Form</i>.</li>\n<li><i>Rappel</i> can be cast on any targetable enemy unit (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">traps</a></span>, and <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>) <b>except</b> <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li>\n<li><b>Elise</b> will attempt to position behind her target if she descends closer than <i>Rappel\'s</i> max range.</li>\n<li>Without additional vision, <b>Elise</b> cannot <i>Rappel</i> to <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span> from the other side of the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor\'s"><img alt="Baron Nashor\'s" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor\'s</a></span></span> pit, but can <i>Rappel</i> to <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragon"><img alt="Dragon" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragon</a></span></span> by standing near the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Scryer%27s_Bloom" title="Scryer\'s Bloom"><img alt="Scryer\'s Bloom" src="/wiki/images/Scryer%27s_BloomSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Scryer%27s_Bloom" class="mw-redirect" title="Scryer\'s Bloom">Scryer\'s Bloom</a></span></span> spawn locations. This is a result of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> being granted in a smaller circle than the target range limit for descending and the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Summoner\'s rift"><a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)"><img alt="Summoner\'s Rift icon.png" src="/wiki/images/Summoner%27s_Rift_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)">Summoner\'s Rift</a></span> map having height variations. With sight of the target, both can be accessible with <i>Rappel</i> from behind the pits.</li>\n<li><b>Elise</b> has a smaller range for <a href="/wiki/Ground-targeted" class="mw-redirect" title="Ground-targeted">ground-targeting</a>. <b>Elise</b> will walk into range and then perform <i>Rappel</i> if this ability is cast while targeting a location outside of this range.</li>\n<li>If <b>Elise</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during <i>Rappel</i>, she will descend back down immediately.</li>\n<li>The following table refers for interactions while <b>Elise</b> is in <i>Rappel</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Descends onto the attack target.\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    video: 'Elise EVideo.ogv',
  },
  'Spider Form / Human Form': {
    name: 'Spider Form / Human Form',
    display_name: 'Spider Form / Human Form',
    champion: 'Elise',
    skill: 'R',
    maxrank: 4,
    image: {
      full: 'EliseR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '4',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spider Queen\'s"><img alt="Spider Queen\'s" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spider Queen\'s</a></span></span> effects are increased.',
      '<span class="template_sbc"><b>Toggle:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise"><img alt="Elise" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise</a></span></span> switches between her <span class="template_sbc"><b>Human Form</b></span> and <span class="template_sbc"><b>Spider Form</b></span>.',
      '<span class="template_sbc"><b>Spider Form:</b></span> <b>Elise</b> transforms into a spider, reducing her <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span>. She gains <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span>, new abilities, and a <i>Spiderling</i> swarm that will attack her foes. <br><br> <span class="template_sbc"><b>Human Form:</b></span> <b>Elise</b> transforms back into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">human</a></span> form and stores her <i>Spiderlings</i>.',
      '<b>Elise</b> begins with one rank in <i>Spider Form / Human Form</i>, which has 4 ranks.',
    ],
    description: [
      {
        description: "Passive:  Spider Queen's bonuses are increased.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spider Queen\'s"><img alt="Spider Queen\'s" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spider Queen\'s</a></span></span></i> bonuses are increased.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Spider Form.png',
        description:
          'Toggle: Elise switches between her  Human Form and  Spider Form.',
        descriptionHTML:
          '<span class="template_sbc"><b>Toggle:</b></span> <b>Elise</b> switches between her <img alt="Elise OriginalSquare.png" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Human Form</b></span> and <img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Spider Form</b></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Spider Form: Elise transforms into a spider, gaining  25 bonus movement speed,  melee basic attacks with  125 range, and access to her arachnid abilities. Additionally, she summons all stored  Spiderlings.',
        descriptionHTML:
          '<span class="template_sbc"><b><img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> Spider Form:</b></span> <b>Elise</b> transforms into a spider, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25 <b>bonus</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> basic attacks with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 range</span>, and access to her arachnid abilities. Additionally, she summons all stored <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Spider Form:',
            raw: ' Elise transforms into a spider, gaining  25 bonus movement speed,  melee basic attacks with  125 range, and access to her arachnid abilities',
            increasedStat: 'bonus_ad',
            values: 2,
            units: '',
            unitsText:
              'transforms into a spider, gaining  25 bonus movement speed,  melee basic attacks with  125 range, and access to her arachnid abilities',
            pre: 'Elise transforms into a spider, gaining  25 bonus movement speed,  melee basic attacks with  125 range, and access to her arachnid abilities',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Human Form: Elise transforms into a human, gaining  ranged basic attacks, and access to her human abilities. Additionally, she stores all active Spiderlings.',
        descriptionHTML:
          '<span class="template_sbc"><b><img alt="Elise OriginalSquare.png" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> Human Form:</b></span> <b>Elise</b> transforms into a human, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> basic attacks, and access to her human abilities. Additionally, she stores all active <i>Spiderlings</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16.',
        descriptionHTML:
          '<b>Elise</b> begins with one rank in <i>Spider Form / Human Form</i> and can increase it at levels 6, 11, and 16.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16.',
            values: [0, 6],
            user: 'none',
            units: '',
            unitsText:
              'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16.',
            pre: 'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '*Transformations do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>If <i>Spider Form</i> is cast during a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">basic attack windup</a></span>, <b>Elise</b> will perform a <i>Spider Form</i> basic attack that benefits from the bonus damage and healing from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spider Queen"><img alt="Spider Queen" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spider Queen</a></span></span>, but remain at <i>Human Form</i> basic attack range, despite not using a projectile. This basic attack is considered a melee attack and thus will not trigger <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>\'s <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a> bolts.\n<ul><li><i>Spider Form</i> and <i>Human Form</i> have separate cooldowns.</li></ul></li></ul>',
    video: 'Elise RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
