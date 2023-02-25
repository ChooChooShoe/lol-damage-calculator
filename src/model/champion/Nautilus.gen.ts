import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Nautilus';

export default {
  'Staggering Blow': {
    name: 'Staggering Blow',
    display_name: 'Staggering Blow',
    champion: 'Nautilus',
    skill: 'I',
    image: {
      full: 'Nautilus_StaggeringBlow.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    ontargetcdstatic: '6',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL" title="Nautilus\'"><img alt="Nautilus\'" src="/wiki/images/Nautilus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL" title="Nautilus/LoL">Nautilus\'</a></span></span> basic attacks deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> the target.',
      'This effect cannot occur on the same target more than once every few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Staggering Blow.png',
        description:
          "Innate: Nautilus'  basic attacks are empowered to deal 14 − 116 (based on level) bonus physical damage and  root the target for 0.75 − 1.5 (based on level) seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Nautilus\' </b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="14;" data-finish="116;" data-bot_values="14;20;26;32;38;44;50;56;62;68;74;80;86;92;98;104;110;116" data-top_values="">14 − 116 (based on level)</span></span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> the target for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.75;1" data-finish="1.5;16" data-bot_values="0.75;1;1.25;1.5" data-top_values="1;6;11;16">0.<small>75</small> − 1.<small>5</small> (based on level)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: " Nautilus'  basic attacks are empowered to deal 14 − 116 (based on level) bonus physical damage and  root the target for 0.75 − 1.5 (based on level) seconds.",
            damagetype: 'Physical',
            values: [
              14, 20, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98, 104,
              110, 116,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus physical damage and  root the target for 0.75 − 1.5',
            pre: "Nautilus'  basic attacks are empowered to deal 14 − 116",
            post: 'bonus physical damage and  root the target for 0.75 − 1.5',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'This effect cannot occur on the same target more than once every few seconds.',
        descriptionHTML:
          'This effect cannot occur on the same target more than once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> but not the bonus damage.\n<ul><li><i>Staggering Blow\'s</i> enhanced attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> (the on-target cooldown will still be applied).</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Staggering Blow\'s</i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li></ul>',
  },
  'Dredge Line': {
    name: 'Dredge Line',
    display_name: 'Dredge Line',
    champion: 'Nautilus',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NautilusAnchorDrag.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '1122',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unit collision">180</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Terrain collision">0</span>',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL" title="Nautilus"><img alt="Nautilus" src="/wiki/images/Nautilus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL" title="Nautilus/LoL">Nautilus</a></span></span> hurls his anchor in the target direction that stops on the first enemy or terrain hit.',
      'If the anchor hits an enemy, it deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">drags</a></span> them toward <b>Nautilus</b> while he also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward them. Afterwards, the target is briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
      'If the anchor hits terrain, <b>Nautilus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to that location and half of the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> are refunded.',
    ],
    description: [
      {
        icon: '/wiki/images/Dredge Line.png',
        description:
          'Active: Nautilus hurls his anchor in the target direction that stops on the first enemy or terrain hit.If the anchor hits an enemy, it deals magic damage and  reveals them,  dragging them toward Nautilus while he also  dashes toward them within 0.9 seconds. Afterwards, the target is  rooted for 0.1 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> hurls his anchor in the target direction that stops on the first enemy or terrain hit.<br><br>If the anchor hits an enemy, it deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">dragging</a></span> them toward <b>Nautilus</b> while he also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward them within 0.<small>9</small> seconds. Afterwards, the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 0.<small>1</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 115 / 160 / 205 / 250 (+ 90% AP)',
            valuesHTML:
              '70 / 115 / 160 / 205 / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 90% AP)',
            damagetype: 'Magic',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "If the anchor hits terrain, Nautilus  dashes to that location and 50% of Dredge Line's  cooldown and  mana cost are refunded.",
        descriptionHTML:
          'If the anchor hits terrain, <b>Nautilus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to that location and 50% of <i>Dredge Line\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> are refunded.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "If the anchor hits terrain, Nautilus  dashes to that location and 50% of Dredge Line's  cooldown and  mana cost are refunded.",
            values: 5,
            valuesIsPercent: true,
            units: 'total_mana',
            unitsText:
              "of Dredge Line's  cooldown and  mana cost are refunded.the anchor hits terrain, Nautilus  dashes to that location and 50",
            pre: "If the anchor hits terrain, Nautilus  dashes to that location and 50% of Dredge Line's  cooldown and  mana cost are refunded.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Nautilus is  unable to move or attack while Dredge Line is in flight. He can cast  Titan's Wrath and  Riptide during the dash.",
        descriptionHTML:
          '<i><b>Nautilus</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while Dredge Line is in flight. He can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Titan\'s Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Titan\'s_Wrath" title="Titan\'s Wrath"><img alt="Titan\'s Wrath" src="/wiki/images/Nautilus_Titan%27s_Wrath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Titan\'s_Wrath" title="Nautilus/LoL">Titan\'s Wrath</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Riptide" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Riptide" title="Riptide"><img alt="Riptide" src="/wiki/images/Nautilus_Riptide.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Riptide" title="Nautilus/LoL">Riptide</a></span></span> during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects:
      '<a href="/wiki/Self" class="mw-redirect" title="Self">Self</a>, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* <i>Dredge Line</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.\n<ul><li><b>Nautilus</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> all the way to the target\'s location if <i>Dredge Line</i> executed them or they negated the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacement</a></span>.</li>\n<li><i>Dredge Line</i> will not interrupt any movement commands <b>Nautilus</b> was issued pre-cast so long as their directions somewhat correlate (this is intentional to smooth out traveling/escaping).</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the ability but <b>Nautilus</b> will still dash partway to the target.</li>\n<li>The anchor projectile will stop if <b>Nautilus</b> dies while the projectile is traveling. Enemies hit will still be dealt damage. The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">drag</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> are not applied if <b>Nautilus</b> did not initiate the dash.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  "Titan's Wrath": {
    name: "Titan's Wrath",
    display_name: "Titan's Wrath",
    champion: 'Nautilus',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NautilusPiercingGaze.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Centered on target">250</span>',
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL" title="Nautilus"><img alt="Nautilus" src="/wiki/images/Nautilus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL" title="Nautilus/LoL">Nautilus</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself for a few seconds. While the shield holds, his basic attacks apply <i>Pain of Wrath</i> to the target and surrounding enemies.',
      '<span class="template_sbc"><b>Pain of Wrath:</b></span> The target suffers <span style="color: #00B0F0; white-space:normal">magic damage</span> over time, half dealt immediately and the other half dealt after a brief time.',
    ],
    description: [
      {
        icon: "/wiki/images/Titan's Wrath.png",
        description:
          'Active: Nautilus grants himself a  shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and surrounding enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 6 seconds, and while it holds, his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to apply <i>Pain of Wrath</i> to the target and surrounding enemies.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Nautilus grants himself a  shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and surrounding enemies.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 6,
            units: 'total_ap',
            unitsText:
              'grants himself a  shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and surrounding enemies.',
            pre: 'Nautilus grants himself a  shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and surrounding enemies.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values:
              '50 / 60 / 70 / 80 / 90 (+ 8 / 9 / 10 / 11 / 12% maximum health)',
            valuesHTML:
              '50 / 60 / 70 / 80 / 90 <span style="color: #1F995C; white-space:normal">(+&nbsp;8 / 9 / 10 / 11 / 12% <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '50 / 60 / 70 / 80 / 90 (+ 8 / 9 / 10 / 11 / 12% maximum health)',
            healType: 'BonusHealth',
            values: [50, 60, 70, 80, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90',
            children: [
              {
                values: [8, 9, 10, 11, 12],
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 8 / 9 / 10 / 11 / 12% maximum health',
              },
            ],
          },
        ],
      },
      {
        description:
          'Pain of Wrath: The target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Pain of Wrath:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> over time, half dealt immediately and the other half dealt after 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Pain of Wrath:',
            raw: ' The target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.',
            pre: 'The target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '30 / 40 / 50 / 60 / 70 (+ 40% AP)',
            valuesHTML:
              '30 / 40 / 50 / 60 / 70 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 40% AP)',
            damagetype: 'Magic',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
            children: [
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
        description: "Titan's Wrath  resets Nautilus'  basic attack timer.",
        descriptionHTML:
          '<i>Titan\'s Wrath <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Nautilus\' </b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: 'Special',
    notes:
      '* <b>Nautilus\' </b> empowered attacks use different attack animations.\n<ul><li><ul><li>The damage over time will always apply when this animation plays (even if the shield fades during a basic attack).</li></ul></li>\n<li>The <i>Pain of Wrath</i> damage over time debuff replaces itself when reapplied to the target, restarting its tick timer. This will prevent the second instance of damage from the previous debuff.</li>\n<li>The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Interaction with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the ability (but only a single application).</li></ul>',
  },
  Riptide: {
    name: 'Riptide',
    display_name: 'Riptide',
    champion: 'Nautilus',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'NautilusSplashZone.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Wave 1">0 - 350</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Wave 2, offset by 25 units">215 - 465</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Wave 3, offset by 25 units">350 - 590</span>',
    cast_time: '0.<small>25</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown: '7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL" title="Nautilus"><img alt="Nautilus" src="/wiki/images/Nautilus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL" title="Nautilus/LoL">Nautilus</a></span></span> sends three waves of explosions that radiate from him, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Riptide.png',
        description:
          'Active: Nautilus sends three waves of explosions that radiate from him over 0.561 seconds. Each wave deals magic damage to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and  slows them by an amount that decays over 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> sends three waves of explosions that radiate from him <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">over 0.<small>561</small> seconds</span>. Each wave deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by an amount that decays over 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Each wave deals magic damage to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and  slows them by an amount that decays over 1.5 seconds.',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against those hit by subsequent waves beyond the first, and  slows them by an amount that decays over 1.5 seconds.wave deals magic damage to enemies hit, reduced to 50',
            pre: 'Each wave deals magic damage to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and  slows them by an amount that decays over 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '55 / 90 / 125 / 160 / 195 (+ 50% AP)',
            valuesHTML:
              '55 / 90 / 125 / 160 / 195 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 90 / 125 / 160 / 195 (+ 50% AP)',
            damagetype: 'Magic',
            values: [55, 90, 125, 160, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 90 / 125 / 160 / 195',
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
      {
        description: 'Riptide deals 150% damage against  monsters.',
        descriptionHTML:
          '<i>Riptide</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Riptide deals 150% damage against  monsters.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.deals 150',
            pre: 'Riptide deals 150% damage against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Monster Damage:',
            values: '82.5 / 135 / 187.5 / 240 / 292.5 (+ 75% AP)',
            valuesHTML:
              '82.<small>5</small> / 135 / 187.<small>5</small> / 240 / 292.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Monster Damage:',
            raw: '82.5 / 135 / 187.5 / 240 / 292.5 (+ 75% AP)',
            damagetype: 'None',
            values: [82.5, 135, 187.5, 240, 292.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '82.5 / 135 / 187.5 / 240 / 292.5',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
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
      "* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>The first wave is centered around <b>Nautilus</b>, while the second and third wave are centered at an offset of 25 units in front of <b>Nautilus</b> at the original cast location.\n<ul><li>Because of this, there are a zone each in which you can be hit by only 1 wave, or all 3 waves, respectively, without moving.</li></ul></li>\n<li>The first wave happens at 0 seconds after the cast time ends, the second wave at 0.<small>297</small> seconds and the third wave at 0.<small>561</small> seconds.\n<ul><li>The intended timing may be 0.<small>25</small> seconds for each delay, however these are the measured, effective times.</li></ul></li>\n<li>The <i>explosions</i> are only a visual effect. The first wave has 8, the seconds has 9, and the third wave has 10 explosions, equally distributed around the rings, starting with one explosion directly in <b>Nautilus'</b> facing direction on each.</li></ul>",
  },
  'Depth Charge': {
    name: 'Depth Charge',
    display_name: 'Depth Charge',
    champion: 'Nautilus',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'NautilusGrandLine.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '825',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Underway eruptions, estimated">225</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Final eruption">300</span> /<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Seeking charge sight radius">750</span>',
    speed: '275 + 466.<small>67</small> per second',
    cast_time: '0.<small>46</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL" title="Nautilus"><img alt="Nautilus" src="/wiki/images/Nautilus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL" title="Nautilus/LoL">Nautilus</a></span></span> sends a <i>Depth Charge</i> that chases the target enemy champion. It creates eruptions in its wake that deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, as well as briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
      'Upon reaching the target, the <i>Depth Charge</i> erupts a final time for increased effect against the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Depth Charge.png',
        description:
          'Active: Nautilus sends out a  Depth Charge that chases the target enemy  champion, accelerating over time and creating eruptions every 0.264 seconds in its wake that also briefly grant  sight of the area. Enemies hit by the eruptions are dealt magic damage,  knocked up for 1 second, and  stunned for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> sends out a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Depth Charge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Depth_Charge_2" title="Depth Charge"><img alt="Depth Charge" src="/wiki/images/Nautilus_Depth_Charge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Depth_Charge_2" title="Nautilus/LoL">Depth Charge</a></span></span></i> that chases the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, accelerating over time and creating eruptions every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> in its wake that also briefly grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. Enemies hit by the eruptions are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for a duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies hit by the eruptions are dealt magic damage,  knocked up for 1 second, and  stunned for a duration.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'hit by the eruptions are dealt magic damage,  knocked up for 1 second, and  stunned for a duration.',
            pre: 'Enemies hit by the eruptions are dealt magic damage,  knocked up for 1 second, and  stunned for a duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '125 / 150 / 175 / 200 / 225 (+ 40% AP)',
            valuesHTML:
              '125 / 150 / 175 / 200 / 225 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
          {
            name: 'Stun Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 150 / 175 / 200 / 225 (+ 40% AP)',
            damagetype: 'Magic',
            values: [125, 150, 175, 200, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 150 / 175 / 200 / 225',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
      {
        icon: '/wiki/images/Depth Charge 2.png',
        description:
          'Upon reaching the primary target or when it moves too far away, the Depth Charge erupts a final time. The primary target takes increased damage, is  stunned for the same duration, and  knocked up for a modified duration.',
        descriptionHTML:
          'Upon reaching the primary target or when it moves too far away, the <i>Depth Charge</i> erupts a final time. The primary target takes increased damage, is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for a modified duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '150 / 212.5 / 275 / 337.5 / 400 (+ 80% AP)',
            valuesHTML:
              '150 / 212.<small>5</small> / 275 / 337.<small>5</small> / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
          {
            name: 'Knock Up Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '150 / 212.5 / 275 / 337.5 / 400 (+ 80% AP)',
            damagetype: 'None',
            values: [150, 212.5, 275, 337.5, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 212.5 / 275 / 337.5 / 400',
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
          {
            effectType: 'Unique',
            name: 'Knock Up Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* Enemies a certain distance away from the charge / eruption are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span>.\n<ul><li><i>Depth Charge</i> ends prematurely when the target is more than 3000 units away from it.</li>\n<li><i>Depth Charge</i> will not stop chasing if the target dies or becomes untargetable.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Dredge Line" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Dredge_Line" title="Dredge Line"><img alt="Dredge Line" src="/wiki/images/Nautilus_Dredge_Line.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Dredge_Line" title="Nautilus/LoL">Dredge Line</a></span></span> will not override <i>Depth Charge\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span>.</li>\n<li><b>Nautilus</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> himself during the cast time.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
