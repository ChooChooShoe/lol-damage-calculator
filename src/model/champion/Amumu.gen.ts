import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Amumu';

export default {
  'Cursed Touch': {
    name: 'Cursed Touch',
    display_name: 'Cursed Touch',
    champion: 'Amumu',
    skill: 'I',
    image: {
      full: 'Amumu_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu\'s"><img alt="Amumu\'s" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu\'s</a></span></span> basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Curse of the Sad Mummy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Curse of the Sad Mummy"><img alt="Curse of the Sad Mummy" src="/wiki/images/Amumu_Curse_of_the_Sad_Mummy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Amumu/LoL">Curse of the Sad Mummy</a></span></span></i> mark enemies with <i>Curse</i>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Despair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Despair" title="Despair"><img alt="Despair" src="/wiki/images/Amumu_Despair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Despair" title="Amumu/LoL">Despair</a></span></span></i> will refresh ongoing <i>Curse</i> marks on enemies hit.',
      '<i>Curse</i> targets take <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> from incoming <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Cursed_Touch.png',
        description:
          "Innate: Amumu's basic attacks and  Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and  Despair's per-tick damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Amumu\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Curse of the Sad Mummy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Curse of the Sad Mummy"><img alt="Curse of the Sad Mummy" src="/wiki/images/Amumu_Curse_of_the_Sad_Mummy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Amumu/LoL">Curse of the Sad Mummy</a></span></span></i> are empowered to mark enemies with <i>Curse</i> for 3 seconds, refreshing on subsequent applications and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Despair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Despair" title="Despair\'s"><img alt="Despair\'s" src="/wiki/images/Amumu_Despair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Despair" title="Amumu/LoL">Despair\'s</a></span></span></i> per-tick damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: "Amumu's basic attacks and  Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and  Despair's per-tick damage.",
            damagetype: 'None',
            values: 3,
            units: 'total_ap',
            unitsText:
              "basic attacks and  Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and  Despair's per-tick damage.",
            pre: "Amumu's basic attacks and  Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and  Despair's per-tick damage.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Cursed targets receive  10% bonus true damage from all incoming pre-mitigation magic damage.',
        descriptionHTML:
          '<i>Cursed</i> targets receive <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">10% <b>bonus</b> true damage</span></span> from all incoming <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Cursed targets receive  10% bonus true damage from all incoming pre-mitigation magic damage.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus true damage from all incoming pre-mitigation magic damage.targets receive  10',
            pre: 'Cursed targets receive  10% bonus true damage from all incoming pre-mitigation magic damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'True',
    spelleffects: 'default',
    spellshield: 'Special',
    notes:
      '* If the triggering basic attack from <b>Amumu</b> applies <span style="color: #00B0F0; white-space:normal">magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, <i>Curse</i> will be applied before the <span style="color: #00B0F0; white-space:normal">magic damage</span>.\n<ul><li>The <i>Curse</i> application from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Curse of the Sad Mummy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Curse of the Sad Mummy"><img alt="Curse of the Sad Mummy" src="/wiki/images/Amumu_Curse_of_the_Sad_Mummy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Amumu/LoL">Curse of the Sad Mummy</a></span></span></i> applies after the <span style="color: #00B0F0; white-space:normal">magic damage</span>.</li>\n<li>Neutral units / enemies affected by the <i>Curse</i> can receive bonus damage from the opposing team of <b>Amumu</b> / neutral units, but the damage will be credited to <b>Amumu</b>.</li>\n<li>The application of <i>Curse</i> on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Curse of the Sad Mummy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Curse of the Sad Mummy"><img alt="Curse of the Sad Mummy" src="/wiki/images/Amumu_Curse_of_the_Sad_Mummy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Amumu/LoL">Curse of the Sad Mummy</a></span></span></i> is negated if the ability is blocked by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li></ul>',
    video: 'Amumu IVideo.ogv',
  },
  'Bandage Toss': {
    name: 'Bandage Toss',
    display_name: 'Bandage Toss',
    champion: 'Amumu',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BandageToss.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 160',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bandage speed">2000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">1800</span>',
    cast_time: '0.<small>25</small>',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'mana',
    static: '3',
    recharge: '16 / 15.<small>5</small> / 15 / 14.<small>5</small> / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu"><img alt="Amumu" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu</a></span></span> throws a bandage that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the first enemy hit while he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to them.',
      '<b>Amumu</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a charge of <i>Bandage Toss</i>, up to a cap.',
    ],
    description: [
      {
        icon: '/wiki/images/Bandage_Toss.png',
        description:
          'Active: Amumu throws a bandage in the target direction that deals magic damage to the first enemy hit,  stunning them for 1 second and  pulling him to them, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Amumu</b> throws a bandage in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pulling</a></span> him to them, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Amumu throws a bandage in the target direction that deals magic damage to the first enemy hit,  stunning them for 1 second and  pulling him to them, during which they are  revealed.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'throws a bandage in the target direction that deals magic damage to the first enemy hit,  stunning them for 1 second and  pulling him to them, during which they are  revealed.',
            pre: 'Amumu throws a bandage in the target direction that deals magic damage to the first enemy hit,  stunning them for 1 second and  pulling him to them, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 95 / 120 / 145 / 170 (+ 85% AP)',
            valuesHTML:
              '70 / 95 / 120 / 145 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;85% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 85% AP)',
            damagetype: 'Magic',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Amumu periodically stocks a Bandage Toss charge, up to a maximum of 2.',
        descriptionHTML:
          '<b>Amumu</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Bandage Toss</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Amumu periodically stocks a Bandage Toss charge, up to a maximum of 2.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Bandage Toss charge, up to a maximum of 2.',
            pre: 'Amumu periodically stocks a Bandage Toss charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Despair can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Despair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Despair" title="Despair"><img alt="Despair" src="/wiki/images/Amumu_Despair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Despair" title="Amumu/LoL">Despair</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <b>Amumu</b> will track the target if they change locations.\n<ul><li><ul><li>He will dash to the target\'s previous location if the target is 2000 or more units away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2000</span> units.</li></ul></li>\n<li><i>Bandage Toss</i> will always be directed towards the target\'s location even if <b>Amumu</b> moves while it is in flight.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">Immobilizing</a></span> effects will not prevent <b>Amumu</b> from commencing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span>.</li>\n<li><i>Bandage Toss</i> does not fizzle on <b>Amumu\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span>, and can still stun and damage enemies.</li>\n<li><b>Amumu</b> is still able to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> even if <i>Bandage Toss</i> is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li><b>Amumu</b> will be ordered to basic attack the target upon completion of the dash.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Amumu QVideo.ogv',
  },
  Despair: {
    name: 'Despair',
    display_name: 'Despair',
    champion: 'Amumu',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AuraofDespair.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: 'none',
    cost: '8',
    costtype: 'mana per second',
    static: '1',
    blurb: [
      '<span class="template_sbc"><b>Toggle:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu"><img alt="Amumu" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu</a></span></span> begins crying, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Despair.png',
        description:
          'Toggle: Amumu cries a continuous pool of tears, dealing magic damage every 0.5 seconds to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Toggle:</b></span> <b>Amumu</b> cries a continuous pool of tears, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values:
              "6 / 8 / 10 / 12 / 14 (+ 1 / 1.15 / 1.3 / 1.45 / 1.6% (+ 0.25% per 100 AP) of target's maximum health)",
            valuesHTML:
              '6 / 8 / 10 / 12 / 14 <span style="color: #1F995C; white-space:normal">(+&nbsp;1 / 1.<small>15</small> / 1.<small>3</small> / 1.<small>45</small> / 1.<small>6</small>% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>25</small>% per 100 AP)</span> of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage Per Tick:',
            raw: "6 / 8 / 10 / 12 / 14 (+ 1 / 1.15 / 1.3 / 1.45 / 1.6% (+ 0.25% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [6, 8, 10, 12, 14],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 8 / 10 / 12 / 14',
            children: [
              {
                values: [1, 1.15, 1.3, 1.45, 1.6],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 1 / 1.15 / 1.3 / 1.45 / 1.6%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 0.25,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 0.25% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '* Toggle abilities do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>Despite the rounding in <i>Despair\'s</i> tooltip, it will deal increased damage for every point of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="+0.0025% per 1 AP">ability power</span>.</li></ul>',
    video: 'Amumu WVideo.ogv',
  },
  Tantrum: {
    name: 'Tantrum',
    display_name: 'Tantrum',
    champion: 'Amumu',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'Tantrum.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: '0.<small>25</small>',
    cost: '35',
    costtype: 'mana',
    cooldown: '9 / 8 / 7 / 6 / 5',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu"><img alt="Amumu" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu</a></span></span> gains damage reduction against <span style="color: #FF8C34; white-space:normal">physical damage</span>. <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<i>Tantrum\'s</i></span> cooldown is reduced whenever he is hit by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Amumu</b> releases his anger, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    ],
    description: [
      {
        description:
          'Passive: Amumu reduces every instance of post-mitigation physical damage taken, capped at 50% of the damage instance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Amumu</b> reduces every instance of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> taken, capped at 50% of the damage instance.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: 'Amumu reduces every instance of post-mitigation physical damage taken, capped at 50% of the damage instance.',
            damagetype: 'Physical',
            values: 5,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of the damage instance.reduces every instance of post-mitigation physical damage taken, capped at 50',
            pre: 'Amumu reduces every instance of post-mitigation physical damage taken, capped at 50% of the damage instance.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Reduction:',
            values:
              '5 / 7 / 9 / 11 / 13 (+ 3% bonus armor) (+ 3% bonus magic resistance)',
            valuesHTML:
              '5 / 7 / 9 / 11 / 13 <span style="color:yellow; white-space:normal">(+&nbsp;3% <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;3% <b>bonus</b> magic resistance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Reduction:',
            raw: '5 / 7 / 9 / 11 / 13 (+ 3% bonus armor) (+ 3% bonus magic resistance)',
            damagetype: 'Physical',
            values: [5, 7, 9, 11, 13],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 7 / 9 / 11 / 13',
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 3% bonus armor',
              },
              {
                values: 3,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 3% bonus magic resistance',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Tantrum.png',
        description:
          'Active: Amumu releases his anger, dealing magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Amumu</b> releases his anger, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '65 / 100 / 135 / 170 / 205 (+ 50% AP)',
            valuesHTML:
              '65 / 100 / 135 / 170 / 205 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 100 / 135 / 170 / 205 (+ 50% AP)',
            damagetype: 'Magic',
            values: [65, 100, 135, 170, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 100 / 135 / 170 / 205',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Tantrum's  current cooldown is reduced by 0.75 seconds whenever Amumu is hit by a basic attack.",
        descriptionHTML:
          '<i>Tantrum\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>75</small> seconds whenever <b>Amumu</b> is hit by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* A <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span>\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> and each <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effect are all separate damage instances, and may be reduced each if they deal <span style="color: #FF8C34; white-space:normal">physical damage</span>.\n<ul><li><i>Tantrum\'s</i> cooldown reduction will trigger multiple times for effects such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Double Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Double Strike"><img alt="Double Strike" src="/wiki/images/Master_Yi_Double_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Master Yi/LoL">Double Strike</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade\'s"><img alt="Guinsoo\'s Rageblade\'s" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade\'s</a></span></span> <i>Phantom Hit</i>.\n<ul><li>The cooldown will be reduced, even if the incoming attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li>The cooldown will not be reduced, if the incoming attack misses due to the enemy being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Amumu EVideo.ogv',
  },
  'Curse of the Sad Mummy': {
    name: 'Curse of the Sad Mummy',
    display_name: 'Curse of the Sad Mummy',
    champion: 'Amumu',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'CurseoftheSadMummy.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 550',
    cast_time: '0.<small>25</small>',
    cost: '100 / 125 / 150 / 175 / 200',
    costtype: 'mana',
    cooldown: '150 / 137.<small>5</small> / 125 / 112.<small>5</small> / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu"><img alt="Amumu" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu</a></span></span> entangles nearby enemies in bandages, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> as well as briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Curse_of_the_Sad_Mummy.png',
        description:
          'Active: Amumu entangles nearby enemies in bandages, dealing magic damage as well as  knocking down and  stunning them for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Amumu</b> entangles nearby enemies in bandages, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Amumu entangles nearby enemies in bandages, dealing magic damage as well as  knocking down and  stunning them for 1.5 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'entangles nearby enemies in bandages, dealing magic damage as well as  knocking down and  stunning them for 1.5 seconds.',
            pre: 'Amumu entangles nearby enemies in bandages, dealing magic damage as well as  knocking down and  stunning them for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            damagetype: 'Magic',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
    video: 'Amumu RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
