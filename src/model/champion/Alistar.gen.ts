import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Alistar';

export default {
  'Triumphant Roar': {
    name: 'Triumphant Roar',
    display_name: 'Triumphant Roar',
    champion: 'Alistar',
    skill: 'I',
    image: {
      full: 'Alistar_E.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Range for dying enemies">1000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Heal radius">950</span>',
    static: '3',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL" title="Alistar"><img alt="Alistar" src="/wiki/images/Alistar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL" title="Alistar/LoL">Alistar</a></span></span> generates stacks of <i>Triumph</i> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacing</a></span> enemy champions or when a nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>.',
      'At max stacks or when a nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> dies, he <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heals</span></span> himself and nearby allied champions.',
    ],
    description: [
      {
        icon: '/wiki/images/Triumphant_Roar.png',
        description:
          'Innate: Alistar generates a stack of Triumph for each enemy  champion he  stuns or  displaces with his abilities, and each time a nearby enemy  minion or non-epic  monster dies. He generates 7 stacks if a nearby enemy champion or epic monster dies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Alistar</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Triumph</i> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displaces</a></span> with his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, and each time a nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> dies. He generates 7 stacks if a nearby enemy champion or epic monster dies.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'He generates 7 stacks if a nearby enemy champion or epic monster dies.',
            min: 0,
            max: 10,
            description:
              'He generates 7 stacks if a nearby enemy champion or epic monster dies.',
            values: 7,
            units: 'genericStacks',
            unitsText:
              'generates 7 stacks if a nearby enemy champion or epic monster dies.',
            pre: 'He generates 7 stacks if a nearby enemy champion or epic monster dies.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'At 7 stacks, Alistar consumes them all to  heal himself for 5% of his maximum health and nearby allied champions for 7% of his maximum health.',
        descriptionHTML:
          'At 7 stacks, <b>Alistar</b> consumes them all to <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal</span></span> himself for <span style="color: #1F995C; white-space:normal">5% of his <b>maximum</b> health</span> and nearby allied champions for <span style="color: #1F995C; white-space:normal">7% of his <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'At 7 stacks, Alistar consumes them all to  heal himself for 5% of his maximum health and nearby allied champions for 7% of his maximum health.',
            healType: 'BonusHealth',
            values: 7,
            valuesIsPercent: true,
            units: 'genericStacks',
            unitsText:
              'of his maximum health and nearby allied champions for 77 stacks, Alistar consumes them all to  heal himself for 5',
            pre: 'At 7 stacks, Alistar consumes them all to  heal himself for 5% of his maximum health and nearby allied champions for 7% of his maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Triumphant Roar can occur only once every few seconds, though Alistar may still generate stacks before then.',
        descriptionHTML:
          '<i>Triumphant Roar</i> can occur only once every few seconds, though <b>Alistar</b> may still generate stacks before then.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Allies',
    spelleffects: 'Heal',
    projectile: 'special',
    notes:
      '* If <b>Alistar</b> is at 7 stacks when <i>Triumphant Roar</i> comes off cooldown, he will roar as soon as it elapses.\n<ul><li><b>Alistar</b> does not gain stacks for unsuccessfully trying to apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>, for instance against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span> target.\n<ul><li><b>Alistar</b> will still gain a stack for unsuccessfully trying to knock back a champion protected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-ability="Headbutt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL#Headbutt" title="Headbutt"><img alt="Headbutt" src="/wiki/images/Alistar_Headbutt.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL#Headbutt" title="Alistar/LoL">Headbutt</a></span></span></i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>Healing occurs simultaneously for <b>Alistar</b> and his allies.\n<ul><li>There is a VFX projectile (700 missile speed) that cannot be destroyed by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span></i> and is unrelated to the actual heal.</li></ul></li>\n<li><b>Alistar</b> loses all <i>Triumph</i> stacks upon dying.</li></ul>',
    video: 'Alistar IVideo.ogv',
  },
  Pulverize: {
    name: 'Pulverize',
    display_name: 'Pulverize',
    champion: 'Alistar',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'Pulverize.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard cast">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="In WQ combo">0.<small>15</small></span>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL" title="Alistar"><img alt="Alistar" src="/wiki/images/Alistar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL" title="Alistar/LoL">Alistar</a></span></span> smashes the ground, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Pulverize.png',
        description:
          'Active: Alistar smashes the ground, dealing magic damage to nearby enemies and  stunning and  knocking them up simultaneously for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> smashes the ground, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> simultaneously for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Alistar smashes the ground, dealing magic damage to nearby enemies and  stunning and  knocking them up simultaneously for 1 second.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'smashes the ground, dealing magic damage to nearby enemies and  stunning and  knocking them up simultaneously for 1 second.',
            pre: 'Alistar smashes the ground, dealing magic damage to nearby enemies and  stunning and  knocking them up simultaneously for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 80% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 80% AP)',
            damagetype: 'Magic',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
      '* <i>Pulverize</i> can be buffered during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-ability="Headbutt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL#Headbutt" title="Headbutt"><img alt="Headbutt" src="/wiki/images/Alistar_Headbutt.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL#Headbutt" title="Alistar/LoL">Headbutt</a></span></span> to cast with reduced cast time when the dash ends.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Alistar QVideo.ogv',
  },
  Headbutt: {
    name: 'Headbutt',
    display_name: 'Headbutt',
    champion: 'Alistar',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Headbutt.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '650',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">1200 / 1544 / ∞</span>',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL" title="Alistar"><img alt="Alistar" src="/wiki/images/Alistar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL" title="Alistar/LoL">Alistar</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Headbutt.png',
        description:
          "Active: Alistar  dashes to the target enemy's location. If they are within 400 units upon arrival, he deals them magic damage and  knocks them back 700 units over 0.5 seconds while also  stunning them for 0.75 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location. If they are within 400 units upon arrival, he deals them <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="200 units when combined with Pulverize">700 units</span> over 0.<small>5</small> seconds while also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If they are within 400 units upon arrival, he deals them magic damage and  knocks them back 700 units over 0.5 seconds while also  stunning them for 0.75 seconds.',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'they are within 400 units upon arrival, he deals them magic damage and  knocks them back 700 units over 0.5 seconds while also  stunning them for 0.75 seconds.',
            pre: 'If they are within 400 units upon arrival, he deals them magic damage and  knocks them back 700 units over 0.5 seconds while also  stunning them for 0.75 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '55 / 110 / 165 / 220 / 275 (+ 100% AP)',
            valuesHTML:
              '55 / 110 / 165 / 220 / 275 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 110 / 165 / 220 / 275 (+ 100% AP)',
            damagetype: 'Magic',
            values: [55, 110, 165, 220, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 110 / 165 / 220 / 275',
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
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* The dash speed depends on the inverse of the distance to the target:\n<ul><li><ul><li>If <b>Alistar\'s</b> <a href="/wiki/Size" title="Size">radius</a> overlaps with his target\'s, he will dash with <span style="color: #F5EE99; white-space:normal">1200 speed</span>.</li>\n<li>If <b>Alistar</b> is further from his target than the previous condition, he will dash with (1200 &nbsp;×&nbsp; dash distance) / (dash distance - sum of radiuses).\n<ul><li>At maximum target range, against an enemy with a 65 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span> (median of all champions), <b>Alistar</b> will dash with <span style="color: #F5EE99; white-space:normal">1544 speed</span> (reaching his target within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="rounded to next game tick">0.<small>429</small> seconds</span>).</li>\n<li>Both the lower the dash distance and the larger <b>Alistar</b> and/or his target, the faster the dash becomes; this scales hyperbolically.</li></ul></li></ul></li>\n<li>When <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-ability="Pulverize" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL#Pulverize" title="Pulverize"><img alt="Pulverize" src="/wiki/images/Alistar_Pulverize.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL#Pulverize" title="Alistar/LoL">Pulverize</a></span></span> is buffered during the dash, the knockback distance is reduced to 200 units.</li>\n<li>The CC duration of the ability can be reduced by up-to 25% <span style="white-space:nowrap"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Tenacity" title="Tenacity">Tenacity</a></span>, due to airborne not being reducible while the stun is.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockback</a></span> direction is in a straight line from <b>Alistar\'s</b> original location at start of cast and the enemy when <b>Alistar\'s</b> dash ends.</li>\n<li><i>Headbutt</i> can knock enemies through terrain. The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockback</a></span> stops short on walls that cannot be surpassed but the disable duration is not changed.</li>\n<li>The <a href="/wiki/Spell_indicator" title="Spell indicator">spell indicator</a> for this ability also displays the direction for the knock back relative to <b>Alistar\'s</b> position.</li>\n<li><b>Alistar\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to -375&nbsp;」</span><span class="flipText2">「&nbsp;by 500&nbsp;」</span></span>during <i>Headbutt</i>, to prevent him from being able to attack the target when he completes the dash.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li></ul>',
    video: 'Alistar WVideo.ogv',
  },
  Trample: {
    name: 'Trample',
    display_name: 'Trample',
    champion: 'Alistar',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AlistarE.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL" title="Alistar"><img alt="Alistar" src="/wiki/images/Alistar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL" title="Alistar/LoL">Alistar</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. He generates a stack of <i>Trample</i> each time this damages at least one <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      'At max stacks, his next basic attack against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within a few seconds will deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Trample.png',
        description:
          'Active: Alistar tramples the ground around him every 0.5 seconds over 5 seconds, becoming  ghosted and dealing magic damage to nearby enemies. Each time this damages at least one enemy champion, he generates a stack of Trample that lasts for the remaining duration, stacking up to 5 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> tramples the ground around him every 0.<small>5</small> seconds over 5 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. Each time this damages at least one enemy champion, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Trample</i> that lasts for the remaining duration, stacking up to 5 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Each time this damages at least one enemy champion, he generates a stack of Trample that lasts for the remaining duration, stacking up to 5 times.',
            min: 0,
            max: 5,
            description:
              'Each time this damages at least one enemy champion, he generates a stack of Trample that lasts for the remaining duration, stacking up to 5 times.',
            values: 5,
            units: 'genericStacks',
            unitsText:
              'time this damages at least one enemy champion, he generates a stack of Trample that lasts for the remaining duration, stacking up to 5 times.',
            pre: 'Each time this damages at least one enemy champion, he generates a stack of Trample that lasts for the remaining duration, stacking up to 5 times.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '8 / 11 / 14 / 17 / 20 (+ 7% AP)',
            valuesHTML:
              '8 / 11 / 14 / 17 / 20 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '8 / 11 / 14 / 17 / 20 (+ 7% AP)',
            damagetype: 'Magic',
            values: [8, 11, 14, 17, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 11 / 14 / 17 / 20',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Trample_2.png',
        description:
          "At 5 stacks, Alistar's next basic attack against a  champion within 6 seconds is empowered to deal 20 − 275 (based on level) bonus magic damage and  stun the target for 1 second. This will end Trample prematurely.",
        descriptionHTML:
          'At 5 stacks, <b>Alistar\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 6 seconds is empowered to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="275;" data-bot_values="20;35;50;65;80;95;110;125;140;155;170;185;200;215;230;245;260;275" data-top_values="">20 − 275 (based on level)</span> <b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target for 1 second. This will end <i>Trample</i> prematurely.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: "At 5 stacks, Alistar's next basic attack against a  champion within 6 seconds is empowered to deal 20 − 275 (based on level) bonus magic damage and  stun the target for 1 second",
            min: 0,
            max: 10,
            description:
              "At 5 stacks, Alistar's next basic attack against a  champion within 6 seconds is empowered to deal 20 − 275 (based on level) bonus magic damage and  stun the target for 1 second",
            values: [
              20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215,
              230, 245, 260, 275,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage and  stun the target for 1 second',
            pre: "At 5 stacks, Alistar's next basic attack against a  champion within 6 seconds is empowered to deal 20 − 275",
            post: 'bonus magic damage and  stun the target for 1 second',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    occurrence: 'On-hit',
    spellshield: 'Special',
    notes:
      '* <i>Trample</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span> damage around <b>Alistar</b>, while the bonus damage on the resulting attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span>.\n<ul><li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> and <b>bonus</b> damage are blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span> but the base attack damage is not.</li>\n<li>The on-hit effect is consumed if the attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, but not if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or missed while <b>Alistar</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>. In all cases, the attack\'s effects are negated as normal.</li>\n<li>As it is an <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effect, the bonus damage and stun can be applied by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade\'s"><img alt="Guinsoo\'s Rageblade\'s" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade\'s</a></span></span> Phantom Hit.</li></ul>',
    video: 'Alistar EVideo.ogv',
  },
  'Unbreakable Will': {
    name: 'Unbreakable Will',
    display_name: 'Unbreakable Will',
    champion: 'Alistar',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'FerociousHowl.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 100 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL" title="Alistar"><img alt="Alistar" src="/wiki/images/Alistar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL" title="Alistar/LoL">Alistar</a></span></span> lets out a wild roar, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effects and gaining damage reduction for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Unbreakable_Will.png',
        description:
          'Active: Alistar  cleanses himself of all  crowd control. For the next 7 seconds, he reduces incoming damage taken.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>. For the next 7 seconds, he reduces incoming damage taken.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'For the next 7 seconds, he reduces incoming damage taken.',
            damagetype: 'None',
            values: 7,
            user: 'none',
            units: '',
            unitsText: 'the next 7 seconds, he reduces incoming damage taken.',
            pre: 'For the next 7 seconds, he reduces incoming damage taken.',
          },
        ],
        leveling: [
          {
            name: 'Damage Reduction:',
            values: '55 / 65 / 75%',
            valuesHTML: '55 / 65 / 75%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage Reduction:',
            raw: '55 / 65 / 75%',
            damagetype: 'None',
            values: [55, 65, 75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 65 / 75%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">True damage</a></span> cannot be reduced by any means and will deal full damage to <b>Alistar</b> during <i>Unbreakable Will</i>.\n<ul><li><i>Unbreakable Will\'s</i> modifier to incoming damage stacks additively with <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL" title="Vladimir\'s"><img alt="Vladimir\'s" src="/wiki/images/Vladimir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL" title="Vladimir/LoL">Vladimir\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Hemoplague" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Hemoplague"><img alt="Hemoplague" src="/wiki/images/Vladimir_Hemoplague.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Hemoplague" title="Vladimir/LoL">Hemoplague</a></span></span></span> for a total reduction of 45/55/65%.<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="this might be unintended">*</span></li></ul>',
    video: 'Alistar RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
