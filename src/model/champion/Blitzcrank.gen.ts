import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Blitzcrank';

export default {
  'Mana Barrier': {
    name: 'Mana Barrier',
    display_name: 'Mana Barrier',
    champion: 'Blitzcrank',
    skill: 'I',
    image: {
      full: 'Blitzcrank_ManaBarrier.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts immediately when the shield is gained">90</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, when <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Blitzcrank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank"><img alt="Blitzcrank" src="/wiki/images/Blitzcrank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank/LoL">Blitzcrank</a></span></span> gets to <span style="color: #1F995C; white-space:normal">low-health</span>, <i>Mana Barrier</i> generates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that scales with <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">maximum mana</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Mana_Barrier.png',
        description:
          'Innate: Periodically, when damaged to  30% maximum health, Blitzcrank generates a  shield equal to  15% − 45% (based on level) of maximum mana, lasting up to 10 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, when damaged to <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30% <b>maximum</b> health</span></span>, <b>Blitzcrank</b> generates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="45;" data-bot_values="15;16.76;18.53;20.29;22.06;23.82;25.59;27.35;29.12;30.88;32.65;34.41;36.18;37.94;39.71;41.47;43.24;45" data-top_values="" data-bot_key="%">15% − 45% (based on level)</span> of <b>maximum</b> mana</span></span>, lasting up to 10 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Periodically, when damaged to  30% maximum health, Blitzcrank generates a  shield equal to  15% − 45% (based on level) of maximum mana, lasting up to 10 seconds.',
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_mana',
            unitsText: 'of maximum mana, lasting up to 10 seconds.',
            pre: 'Periodically, when damaged to  30% maximum health, Blitzcrank generates a  shield equal to  15% − 45%',
            post: 'of maximum mana, lasting up to 10 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Shield',
    notes:
      '* The shield will absorb the portion of incoming damage that would reduce health past 30%.\n<ul><li><i>Mana Barrier\'s</i> interactions with other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> effects that trigger before taking damage that would reduce below 30% health:\n<ul><li><i>Mana Barrier</i> will trigger simultaneously with the <a href="/wiki/Named_item_effect#Lifeline" title="Named item effect">Lifeline</a> effect from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hexdrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hexdrinker" title="Hexdrinker"><img alt="Hexdrinker" src="/wiki/images/Hexdrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hexdrinker" title="Hexdrinker">Hexdrinker</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Maw of Malmortius" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maw_of_Malmortius" title="Maw of Malmortius"><img alt="Maw of Malmortius" src="/wiki/images/Maw_of_Malmortius_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maw_of_Malmortius" title="Maw of Malmortius">Maw of Malmortius</a></span></span>, or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Immortal Shieldbow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Immortal_Shieldbow" title="Immortal Shieldbow"><img alt="Immortal Shieldbow" src="/wiki/images/Immortal_Shieldbow_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Immortal_Shieldbow" title="Immortal Shieldbow">Immortal Shieldbow</a></span></span> if <b>Blitzcrank</b> takes damage while above 30% health, and trigger before them when the damage is taken while below 30% health.\n<ul><li><i>Mana Barrier</i> will always trigger simultaneously with the <a href="/wiki/Named_item_effect#Lifeline" title="Named item effect">Lifeline</a> effect from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Sterak\'s Gage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sterak%27s_Gage" title="Sterak\'s Gage"><img alt="Sterak\'s Gage" src="/wiki/images/Sterak%27s_Gage_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sterak%27s_Gage" title="Sterak\'s Gage">Sterak\'s Gage</a></span></span> if <b>Blitzcrank</b> takes damage while above or below 30% health.</li></ul></li>\n<li><i>Mana Barrier</i> will trigger after <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Nullifying Orb" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nullifying_Orb_(Rune)" title="Nullifying Orb"><img alt="Nullifying Orb" src="/wiki/images/Nullifying_Orb_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Nullifying_Orb_(Rune)" class="mw-redirect" title="Nullifying Orb (Rune)">Nullifying Orb</a></span></span> if <b>Blitzcrank</b> takes damage while above 30% health, and trigger simultaneously with it while below 30% health.</li></ul></li></ul>',
    video: 'Blitzcrank IVideo.ogv',
  },
  'Rocket Grab': {
    name: 'Rocket Grab',
    display_name: 'Rocket Grab',
    champion: 'Blitzcrank',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RocketGrab.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1115 /  1020',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1800</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Displacement speed">1800</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '20 / 19 / 18 / 17 / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Blitzcrank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank"><img alt="Blitzcrank" src="/wiki/images/Blitzcrank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank/LoL">Blitzcrank</a></span></span> fires the right hand which deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the first enemy hit. The target is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> towards <b>Blitzcrank</b>.',
    ],
    description: [
      {
        icon: '/wiki/images/Rocket_Grab.png',
        description:
          'Active: Blitzcrank fires their right hand in the target direction that catches the first enemy hit, dealing them magic damage,  stunning them for 0.65 seconds, and  pulling them towards Blitzcrank, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> fires their right hand in the target direction that catches the first enemy hit, dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>65</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> them towards <b>Blitzcrank</b>, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '105 / 150 / 195 / 240 / 285 (+ 120% AP)',
            valuesHTML:
              '105 / 150 / 195 / 240 / 285 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;120% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '105 / 150 / 195 / 240 / 285 (+ 120% AP)',
            damagetype: 'Magic',
            values: [105, 150, 195, 240, 285],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '105 / 150 / 195 / 240 / 285',
            children: [
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
        icon: '/wiki/images/undefined',
        description:
          'Blitzcrank is  unable to move or attack while Rocket Grab is in flight.',
        descriptionHTML:
          '<i><b>Blitzcrank</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while Rocket Grab is in flight.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Rocket Grab\'s</i> range is composed of a missile with 1080 range, and a smaller center-range area check at the end (colloqially known as a \'lollipop\').\n<ul><li><ul><li>The area check is currently half as long as it is supposed to be, reducing the intended 1150 range of the ability to 1115 range.\n<ul><li>Hitting an enemy with this area check only also fails to play the ability\'s hit SFX. This makes it possible to easily distinguish whether the target was picked up by the missile collision or \'lollipop\'.</li></ul></li>\n<li>Targets <a href="/wiki/Size" title="Size">larger than 95 units in radius</a> can be hit by a different edge-range circle check at the end of the missile.</li></ul></li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> debuff lasts for up-to 1 second but will end prematurely when the target\'s movement stops, while the stun will persist (if duration permits).</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>The target\'s destination lies 75 units in front of <b>Blitzcrank</b>.\n<ul><li>If the target is closer than this, the effect will still move them to this location.</li>\n<li>If this location would be inside static terrain, the target\'s destination will end up on <b>Blitzcrank\'s</b> side, even if that means pulling them right on top of <b>Blitzcrank</b>.\n<ul><li>This can occasionally fail.</li></ul></li></ul></li>\n<li>If <b>Blitzcrank</b> is being moved (e.g. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">Airborne</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">Kinematics</a></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Fate\'s Call" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Fate\'s Call"><img alt="Fate\'s Call" src="/wiki/images/Kalista_Fate%27s_Call.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Kalista/LoL">Fate\'s Call</a></span></span>) during the grab, the target will be pulled towards <b>Blitzcrank</b>s old location.</li>\n<li><b>Blitzcrank</b> will be ordered to <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> the target once the target arrives.</li>\n<li>If the target dies to <i>Rocket Grab\'s</i> damage, they will not be pulled.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    video: 'Blitzcrank QVideo.ogv',
  },
  Overdrive: {
    name: 'Overdrive',
    display_name: 'Overdrive',
    champion: 'Blitzcrank',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Overdrive.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '85',
    costtype: 'mana',
    cooldown: '15',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Blitzcrank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank"><img alt="Blitzcrank" src="/wiki/images/Blitzcrank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank/LoL">Blitzcrank</a></span></span> shifts into overdrive, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span>.',
      'When the effect ends, <b>Blitzcrank</b> is briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Overdrive.png',
        description:
          "Active: Blitzcrank shifts into overdrive, gaining  bonus attack speed for 5 seconds and  bonus movement speed that decays to 10% over the first 2.9 seconds. While active, their basic attacks deal bonus magic damage  on-hit equal to 1% of the target's maximum health, increased by 60 − 220 (based on level) against non-champions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> shifts into overdrive, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays to 10% over the first 2.<small>9</small> seconds. While active, their basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> equal to <span style="color: #1F995C; white-space:normal">1% of the target\'s <b>maximum</b> health</span>, increased by <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="60 +&nbsp;20 per level, then +&nbsp;5 per level starting at level 7" data-bot_values="60;80;100;120;140;160;165;170;175;180;185;190;195;200;205;210;215;220" data-top_values="">60 − 220 (based on level)</span></span> against non-champions.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Blitzcrank shifts into overdrive, gaining  bonus attack speed for 5 seconds and  bonus movement speed that decays to 10% over the first 2.9 seconds',
            increasedStat: 'bonus_ad',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'over the first 2.9 secondsshifts into overdrive, gaining  bonus attack speed for 5 seconds and  bonus movement speed that decays to 10',
            pre: 'Blitzcrank shifts into overdrive, gaining  bonus attack speed for 5 seconds and  bonus movement speed that decays to 10% over the first 2.9 seconds',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "While active, their basic attacks deal bonus magic damage  on-hit equal to 1% of the target's maximum health, increased by 60 − 220 (based on level) against non-champions.",
            healType: 'OutgoingHeals',
            values: [
              60, 69.41, 78.82, 88.24, 97.65, 107.06, 116.47, 125.88, 135.29,
              144.71, 154.12, 163.53, 172.94, 182.35, 191.76, 201.18, 210.59,
              220,
            ],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'against non-champions.',
            pre: "While active, their basic attacks deal bonus magic damage  on-hit equal to 1% of the target's maximum health, increased by 60 − 220",
            post: 'against non-champions.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '30 / 43 / 56 / 69 / 82%',
            valuesHTML: '30 / 43 / 56 / 69 / 82%',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '70 / 75 / 80 / 85 / 90%',
            valuesHTML: '70 / 75 / 80 / 85 / 90%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 43 / 56 / 69 / 82%',
            values: [30, 43, 56, 69, 82],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 43 / 56 / 69 / 82%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '70 / 75 / 80 / 85 / 90%',
            values: [70, 75, 80, 85, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 75 / 80 / 85 / 90%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'When Overdrive ends, Blitzcrank is  slowed by 30% for 1.5 seconds.',
        descriptionHTML:
          'When <i>Overdrive</i> ends, <b>Blitzcrank</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 30% for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'When Overdrive ends, Blitzcrank is  slowed by 30% for 1.5 seconds.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1.5 seconds.Overdrive ends, Blitzcrank is  slowed by 30',
            pre: 'When Overdrive ends, Blitzcrank is  slowed by 30% for 1.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'magic',
    spelleffects: 'proc',
    notes:
      '* The movement speed boost\'s decay is linear. On the first stat update after the buff is gained, the boost does not decay.\n<ul><li>The self-slow is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">Tenacity</a></span>.</li></ul>',
    video: 'Blitzcrank WVideo.ogv',
  },
  'Power Fist': {
    name: 'Power Fist',
    display_name: 'Power Fist',
    champion: 'Blitzcrank',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'PowerFist.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">9 / 8 / 7 / 6 / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Blitzcrank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank"><img alt="Blitzcrank" src="/wiki/images/Blitzcrank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank/LoL">Blitzcrank</a></span></span> charges up a fist to make the next <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic attack</a></span> deal double damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> the target into the air.',
    ],
    description: [
      {
        icon: '/wiki/images/Power_Fist.png',
        description:
          'Active: Blitzcrank empowers their next basic attack within 5 seconds to have an  uncancellable windup, deal 75% AD (+ 25% AP) bonus physical damage, increased to 250% AD (+ 150% AP) against non-champions, and  knock up the target for 1 second. This damage is affected by  critical strike modifiers.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> empowers their next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color:orange; white-space:normal">75% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, increased to <span style="color:orange; white-space:normal">250% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span> against non-champions, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> the target for 1 second. This damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Blitzcrank empowers their next basic attack within 5 seconds to have an  uncancellable windup, deal 75% AD (+ 25% AP) bonus physical damage, increased to 250% AD (+ 150% AP) against non-champions, and  knock up the target for 1 second',
            increasedStat: 'bonus_ad',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText: 'bonus physical damage, increased to 250% AD',
            pre: 'Blitzcrank empowers their next basic attack within 5 seconds to have an  uncancellable windup, deal 75% AD',
            post: 'bonus physical damage, increased to 250% AD',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Power Fist  resets Blitzcrank's basic attack timer.",
        descriptionHTML:
          '<i>Power Fist <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Blitzcrank\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemy, Structure',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: 'Special',
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockup</a></span> is applied even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">missed</a></span>.\n<ul><li><ul><li>It is not applied if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> prevents the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockup</a></span> but not the damage.</li>\n<li>The enhanced attack will still complete and hit the target even if they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> during the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack\'s windup</a></span>.</li>\n<li>The target is displaced a short distance during the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockup</a></span> in a random direction.</li></ul>',
    video: 'Blitzcrank EVideo.ogv',
  },
  'Static Field': {
    name: 'Static Field',
    display_name: 'Static Field',
    champion: 'Blitzcrank',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'StaticField.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '60 / 50 / 40 / 30 / 20',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <i>Static Field</i> is ready, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Blitzcrank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank\'s"><img alt="Blitzcrank\'s" src="/wiki/images/Blitzcrank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blitzcrank/LoL" title="Blitzcrank/LoL">Blitzcrank\'s</a></span></span> basic attacks apply a stack of <i>Static Field</i>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> detonates a powerful static charge that destroys <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span>, deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silences</a></span> nearby enemies.',
      '<span class="template_sbc"><b>Static Field:</b></span> A stack detonates every second, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target.',
    ],
    description: [
      {
        description:
          "Passive: While Static Field is not on cooldown, Blitzcrank's basic attacks apply a stack to the target  on-hit. After every 1 second, one stack is consumed to deal them magic damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While <i>Static Field</i> is not on cooldown, <b>Blitzcrank\'s</b> basic attacks apply a <a href="/wiki/Stack" title="Stack">stack</a> to the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. After every 1 second, one stack is consumed to deal them <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'After every 1 second, one stack is consumed to deal them magic damage.',
            min: 0,
            max: 10,
            description:
              'After every 1 second, one stack is consumed to deal them magic damage.',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'every 1 second, one stack is consumed to deal them magic damage.',
            pre: 'After every 1 second, one stack is consumed to deal them magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 30 / 35 / 40 / 45 / 50% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30 / 35 / 40 / 45 / 50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 30 / 35 / 40 / 45 / 50% AP)',
            damagetype: 'Magic',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: [30, 35, 40, 45, 50],
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30 / 35 / 40 / 45 / 50% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Static_Field.png',
        description:
          'Active: Blitzcrank detonates a static field, completely destroying damage-mitigating  shields of nearby enemies before dealing them magic damage and  silencing them for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Blitzcrank</b> detonates a static field, completely destroying damage-mitigating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> of nearby enemies before dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silencing</a></span> them for 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '275 / 337.5 / 400 / 462.5 / 525 (+ 100% AP)',
            valuesHTML:
              '275 / 337.<small>5</small> / 400 / 462.<small>5</small> / 525 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '275 / 337.5 / 400 / 462.5 / 525 (+ 100% AP)',
            damagetype: 'Magic',
            values: [275, 337.5, 400, 462.5, 525],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '275 / 337.5 / 400 / 462.5 / 525',
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
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    spellshield: true,
    notes:
      '* <b>Blitzcrank\'s</b> attacks do not have to deal damage to apply the mark.\n<ul><li>The mark will be consumed even if the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>The lightning bolts deal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> while the static field applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.</li>\n<li>Even if <i>Static Field</i> is blocked by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>, it will still destroy any existing damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> on the target.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li>The visual effects will appear from wherever <b>Blitzcrank</b> is at the end of the cast time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li></ul>',
    video: 'Blitzcrank RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
