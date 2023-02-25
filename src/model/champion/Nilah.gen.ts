import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Nilah';

export default {
  'Joy Unending': {
    name: 'Joy Unending',
    display_name: 'Joy Unending',
    champion: 'Nilah',
    skill: 'I',
    image: {
      full: 'NIlahP.Nilah.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Healing and shielding interaction radius">1000</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL" title="Nilah"><img alt="Nilah" src="/wiki/images/Nilah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL" title="Nilah/LoL">Nilah</a></span></span> kills a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>, she and the nearest allied champion gain an additional portion of the <span style="color: #883FD1; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;experience</span></span> they would have lost from sharing.',
      '<span class="template_sbc"><b>Innate:</b></span> <b>Nilah</b> shares a bonus portion of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> with nearby allied champions that apply healing or shielding to her or themselves.',
    ],
    description: [
      {
        description:
          'Innate: Whenever Nilah kills a  minion, she and the nearest allied  champion gain an additional  50% of the experience they would have lost from sharing.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Nilah</b> <a href="/wiki/Kill" title="Kill">kills</a> a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>, she and the nearest allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> gain an additional <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">50% of the experience</span></span> they would have lost from sharing.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Whenever Nilah kills a  minion, she and the nearest allied  champion gain an additional  50% of the experience they would have lost from sharing.',
            increasedStat: 'total_ad',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'of the experience they would have lost from sharing.Nilah kills a  minion, she and the nearest allied  champion gain an additional  50',
            pre: 'Whenever Nilah kills a  minion, she and the nearest allied  champion gain an additional  50% of the experience they would have lost from sharing.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Nilah_Joy_Unending.png',
        description:
          'Innate: Whenever a nearby allied champion uses an ability to  heal or  shield either Nilah or themselves, both they and Nilah receive a bonus amount equal to 7.5% of the healing or 15% of the shielding after a 0.5-second delay. Bonus shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever a nearby allied champion uses an <a href="/wiki/Champion_ability" title="Champion ability">ability</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> either <b>Nilah</b> or themselves, both they and <b>Nilah</b> receive a <b>bonus</b> amount equal to 7.<small>5</small>% of the healing or 15% of the shielding after a 0.<small>5</small>-second delay. <b>Bonus</b> shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Whenever a nearby allied champion uses an ability to  heal or  shield either Nilah or themselves, both they and Nilah receive a bonus amount equal to 7.5% of the healing or 15% of the shielding after a 0.5-second delay',
            healType: 'BonusHealth',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the healing or 15a nearby allied champion uses an ability to  heal or  shield either Nilah or themselves, both they and Nilah receive a bonus amount equal to 7.5',
            pre: 'Whenever a nearby allied champion uses an ability to  heal or  shield either Nilah or themselves, both they and Nilah receive a bonus amount equal to 7.5% of the healing or 15% of the shielding after a 0.5-second delay',
          },
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'Bonus shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.',
            pre: 'Bonus shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Allies',
    notes:
      '* <b>Nilah</b> will gain a portion of all healing and all shielding from nearby allies that activate either of the effects on themselves while she is within range of them.\n<ul><li><ul><li>The same applies to allies that grant <b>Nilah</b> a heal or shield; they gain a portion of the heal or shield given to her by them, even if the heal or shield affects both units.</li></ul></li>\n<li>Heal and shields granted by <a href="/wiki/Item" class="mw-redirect" title="Item">items</a>, <a href="/wiki/Rune" class="mw-redirect" title="Rune">runes</a>, and <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a> will <b>not</b> trigger the increased amount.</li>\n<li>The heal and shield increases do not trigger from their own heal or shield.</li>\n<li><b>Nilah</b> may still gain a shield from her allies\' shields even if they are longer than 4 seconds, but the buff of the shield will only last for up to 4 seconds.</li>\n<li><b>Nilah</b> can receive a normal shield from nearby allies that gain <a href="/wiki/Shield#Physical_shields" title="Shield">physical</a> or <a href="/wiki/Shield#Magic_shields" title="Shield">magic</a> shields.</li>\n<li>The shield from <i>Joy Unending</i> is uncapped however <a href="/wiki/Rune" class="mw-redirect" title="Rune">runes</a> like <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Overheal" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Overheal_(Rune)" title="Overheal"><img alt="Overheal" src="/wiki/images/Overheal_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Overheal_(Rune)" class="mw-redirect" title="Overheal (Rune)">Overheal</a></span></span> will limit the shield.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Formless Blade': {
    name: 'Formless Blade',
    display_name: 'Formless Blade',
    champion: 'Nilah',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NilahQ.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '0 - 600 /  -150 - 500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rectangle width">150</span>',
    cast_time: '0.<small>25</small>',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">4</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL" title="Nilah"><img alt="Nilah" src="/wiki/images/Nilah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL" title="Nilah/LoL">Nilah</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor penetration</span></span> based on her <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>. Her basic attacks and <i>Formless Blade</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> her for a portion of the damage dealt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> based on her <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>, converting overhealing into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> that lasts a few seconds.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> cracks her whip-blade in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased based on her <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>.<br>\n<p>If <i>Formless Blade</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Slipstream" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Slipstream" title="Slipstream"><img alt="Slipstream" src="/wiki/images/Nilah_Slipstream.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Slipstream" title="Nilah/LoL">Slipstream</a></span></span></i>, <b>Nilah</b> leaves a wave in her wake that homes back to her, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.\n</p>',
      'If <i>Formless Blade</i> hits an enemy, <b>Nilah</b> empowers herself for a short time: gaining <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> and <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack speed</span></span>, and causing her basic attacks to strike in a cone that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        description:
          'Passive: Nilah gains  0% − 33% (based on critical strike chance) armor penetration. Her basic attacks and Formless Blade  heal her for 0% − 20% (based on critical strike chance) of the post-mitigation damage dealt to  champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Nilah</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="0.33% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="0;3.3;6.6;9.9;13.2;16.5;19.8;23.1;26.4;29.7;33" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 33% (based on critical strike chance)</span></span> <span style="color:yellow; white-space:normal">armor penetration</span>. Her <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i>Formless Blade</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> her for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="0.2% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="0;2;4;6;8;10;12;14;16;18;20" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 20% (based on critical strike chance)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, converting each heal instance beyond <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that last 6 seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Nilah_Formless_Blade.png',
        description:
          'Active: Nilah cracks her whip-blade in a line in the target direction that deals physical damage to enemies hit, increased by 0% − 120% (based on critical strike chance). Formless Blade can hit structures and applies  life steal at 100% effectiveness.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> cracks her whip-blade in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="1.2% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="0;12;24;36;48;60;72;84;96;108;120" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 120% (based on critical strike chance)</span>. <i>Formless Blade</i> can hit <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Formless Blade can hit structures and applies  life steal at 100% effectiveness.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText:
              'effectiveness.Blade can hit structures and applies  life steal at 100',
            pre: 'Formless Blade can hit structures and applies  life steal at 100% effectiveness.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values:
              '5 / 10 / 15 / 20 / 25 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
            valuesHTML:
              '5 / 10 / 15 / 20 / 25 <span style="color:orange; white-space:normal">(+&nbsp;90 / 97.<small>5</small> / 105 / 112.<small>5</small> / 120% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '5 / 10 / 15 / 20 / 25 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
            damagetype: 'Physical',
            values: [5, 10, 15, 20, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10 / 15 / 20 / 25',
            children: [
              {
                values: [90, 97.5, 105, 112.5, 120],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 90 / 97.5 / 105 / 112.5 / 120% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Formless Blade is cast during  Slipstream, Nilah leaves behind a wave that is sent towards her location at the end of the dash, dealing the same damage to enemies hit.',
        descriptionHTML:
          'If <i>Formless Blade</i> is cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Slipstream" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Slipstream" title="Slipstream"><img alt="Slipstream" src="/wiki/images/Nilah_Slipstream.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Slipstream" title="Nilah/LoL">Slipstream</a></span></span></i>, <b>Nilah</b> leaves behind a wave that is sent towards her location at the end of the dash, dealing the same damage to enemies hit.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Formless Blade hits an enemy, Nilah empowers herself for 4 seconds: gaining  125 bonus attack range and  10% − 60% (based on level) bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit. Against secondary non-champion targets, this is reduced to 33% AD for  minions and 10% AD for  monsters, and additionally executes minions left below  20 health.  On-hit effects are applied only to the primary target.',
        descriptionHTML:
          'If <i>Formless Blade</i> hits an enemy, <b>Nilah</b> empowers herself for 4 seconds: gaining <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 <b>bonus</b> attack range</span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="level" data-start="10;" data-finish="60;" data-bot_values="10;12.94;15.88;18.82;21.76;24.71;27.65;30.59;33.53;36.47;39.41;42.35;45.29;48.24;51.18;54.12;57.06;60" data-top_values="" data-bot_key="%">10% − 60% (based on level)</span> <b>bonus</b> attack speed</span></span>, and causing her basic attacks to strike in a cone that deals <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Against secondary non-champion targets, this is reduced to <span style="color:orange; white-space:normal">33% AD</span> for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span style="color:orange; white-space:normal">10% AD</span> for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and additionally executes minions left below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">20 health</span></span>. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">On-hit</a></span> effects are applied only to the primary target.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'If Formless Blade hits an enemy, Nilah empowers herself for 4 seconds:',
            raw: 'gaining  125 bonus attack range and  10% − 60% (based on level) bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit',
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText:
              'bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit',
            pre: 'gaining  125 bonus attack range and  10% − 60%',
            post: 'bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Against secondary non-champion targets, this is reduced to 33% AD for  minions and 10% AD for  monsters, and additionally executes minions left below  20 health',
            healType: 'OutgoingHeals',
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'AD for  minions and 10secondary non-champion targets, this is reduced to 33',
            pre: 'Against secondary non-champion targets, this is reduced to 33% AD for  minions and 10% AD for  monsters, and additionally executes minions left below  20 health',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'false',
    callforhelp: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Formless Blade\'s</i> active cast triggers call for help for dealing damage despite not being a targeted spell.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> on the empowered attacks.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not block <i>Formless Blade\'s</i> empowered basic attacks.</li>\n<li>Parrying effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>) will negate <i>Formless Blade\'s</i> empowered attacks only as the primary target.</li>\n<li><i>Formless Blade\'s</i> damage is not increased by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Navori Quickblades" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades\'"><img alt="Navori Quickblades\'" src="/wiki/images/Navori_Quickblades_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades">Navori Quickblades\'</a></span></span> <a href="/wiki/Named_item_effect#Impermanence" title="Named item effect">Impermanence</a>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Jubilant Veil': {
    name: 'Jubilant Veil',
    display_name: 'Jubilant Veil',
    champion: 'Nilah',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NilahW.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Edge range"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ally buff collision radius">150</span>',
    cast_time: 'None',
    cost: '60 / 45 / 30 / 15 / 0',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">26 / 25 / 24 / 23 / 22</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL" title="Nilah"><img alt="Nilah" src="/wiki/images/Nilah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL" title="Nilah/LoL">Nilah</a></span></span> briefly envelops herself in mist, during which she gains <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;move speed</span></span> and <span style="color: #00B0F0; white-space:normal">magic damage</span> reduction, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodges</a></span> all non-turret basic attacks.',
      'Allied champions she touches will also be enveloped.',
    ],
    description: [
      {
        icon: '/wiki/images/Nilah_Jubilant_Veil.png',
        description:
          'Active: Nilah envelops herself in mist for 2.25 seconds, during which she becomes  ghosted, gains  bonus movement speed, reduces all incoming magic damage taken by 25%, and  dodges all non- turret basic attacks.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> envelops herself in mist for 2.<small>25</small> seconds, during which she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span>, gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, reduces all incoming <span style="color: #00B0F0; white-space:normal">magic damage</span> taken by 25%, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodges</a></span> all non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> basic attacks.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Nilah envelops herself in mist for 2.25 seconds, during which she becomes  ghosted, gains  bonus movement speed, reduces all incoming magic damage taken by 25%, and  dodges all non- turret basic attacks.',
            increasedStat: 'bonus_ad',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              ', and  dodges all non- turret basic attacks.envelops herself in mist for 2.25 seconds, during which she becomes  ghosted, gains  bonus movement speed, reduces all incoming magic damage taken by 25',
            pre: 'Nilah envelops herself in mist for 2.25 seconds, during which she becomes  ghosted, gains  bonus movement speed, reduces all incoming magic damage taken by 25%, and  dodges all non- turret basic attacks.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '15 / 17.5 / 20 / 22.5 / 25%',
            valuesHTML:
              '15 / 17.<small>5</small> / 20 / 22.<small>5</small> / 25%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '15 / 17.5 / 20 / 22.5 / 25%',
            values: [15, 17.5, 20, 22.5, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Allied champions she touches will also be enveloped for 1.5 seconds, gaining the same effects.',
        descriptionHTML:
          'Allied champions she touches will also be enveloped for 1.<small>5</small> seconds, gaining the same effects.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Allied champions she touches will also be enveloped for 1.5 seconds, gaining the same effects.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'champions she touches will also be enveloped for 1.5 seconds, gaining the same effects.',
            pre: 'Allied champions she touches will also be enveloped for 1.5 seconds, gaining the same effects.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Allies',
    notes:
      '* Allies may only be affected by <i>Jubilant Veil</i> only once every 6 seconds.',
  },
  Slipstream: {
    name: 'Slipstream',
    display_name: 'Slipstream',
    champion: 'Nilah',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'NilahE.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '450',
    target_range: '550',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Radius on dash start location, a width alongside the dash and bugged at the end?">150</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed does not scale with Nilah\'s Move Speed stat">2200</span>',
    cast_time: '0.<small>01</small>',
    cost: '30',
    costtype: 'Mana + 1 Charge',
    static: '0.<small>5</small>',
    recharge: '26 / 22.<small>5</small> / 19 / 15.<small>5</small> / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL" title="Nilah"><img alt="Nilah" src="/wiki/images/Nilah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL" title="Nilah/LoL">Nilah</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target enemy\'s direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through.',
      '<b>Nilah</b> periodically stocks a <i>Slipstream</i> charge, up to a maximum of 2.',
    ],
    description: [
      {
        icon: '/wiki/images/Nilah_Slipstream.png',
        description:
          'Active: Nilah  dashes a fixed distance in the direction of the target unit, dealing physical damage to enemies she passes through.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target unit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '65 / 90 / 115 / 140 / 165 (+ 20% AD)',
            valuesHTML:
              '65 / 90 / 115 / 140 / 165 <span style="color:orange; white-space:normal">(+&nbsp;20% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 90 / 115 / 140 / 165 (+ 20% AD)',
            damagetype: 'Physical',
            values: [65, 90, 115, 140, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 90 / 115 / 140 / 165',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Nilah periodically stocks a Slipstream charge, up to a maximum of 2.',
        descriptionHTML:
          '<b>Nilah</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Slipstream</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Nilah periodically stocks a Slipstream charge, up to a maximum of 2.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Slipstream charge, up to a maximum of 2.',
            pre: 'Nilah periodically stocks a Slipstream charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Slipstream  resets Nilah's basic attack timer.  Formless Blade and  Apotheosis can be cast during the dash.",
        descriptionHTML:
          '<i>Slipstream <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Nilah\'s</b> basic attack timer. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Formless Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Formless_Blade" title="Formless Blade"><img alt="Formless Blade" src="/wiki/images/Nilah_Formless_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Formless_Blade" title="Nilah/LoL">Formless Blade</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Apotheosis" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Apotheosis" title="Apotheosis"><img alt="Apotheosis" src="/wiki/images/Nilah_Apotheosis.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Apotheosis" title="Nilah/LoL">Apotheosis</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Slipstream</i> has a very brief cast time before the start of the dash.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li><i>Formless Blade</i> used during <i>Slipstream</i> might not register, rendering it on cooldown without being casted.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><i>Slipstream</i> has a chance of visually not using charge, causing it to showing one available charge without possibility of using it.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>Dashing to target through a wall within casting range will cancel the dash if wall is longer than dash range.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  Apotheosis: {
    name: 'Apotheosis',
    display_name: 'Apotheosis',
    champion: 'Nilah',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'NilahR.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">450</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ally heal/shield radius">1500</span>',
    cast_time: 'None',
    cost: '80',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">110 / 95 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL" title="Nilah"><img alt="Nilah" src="/wiki/images/Nilah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL" title="Nilah/LoL">Nilah</a></span></span> whirls her whip-blade for a brief moment, continually dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. She then bursts to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pull in</a></span> nearby enemies. Each hit will also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies for a short time.',
      '<b>Nilah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and nearby allied champions for a portion of the damage dealt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> based on her <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>, converting overhealing into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> that lasts a few seconds.',
      '<b>Nilah</b> can move during <i>Apotheosis</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Nilah_Apotheosis.png',
        description:
          'Active: Nilah whirls her whip-blade over 1 second, dealing physical damage to nearby enemies every 0.25 seconds. She then unleashes a burst that deals physical damage and  pulls them 250 units towards her. Each hit also  slows targets by 10% for 3 seconds, refreshing on subsequent hits.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nilah</b> whirls her whip-blade over 1 second, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies every 0.<small>25</small> seconds. She then unleashes a burst that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them 250 units towards her. Each hit also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> targets by 10% for 3 seconds, refreshing on subsequent hits.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Nilah whirls her whip-blade over 1 second, dealing physical damage to nearby enemies every 0.25 seconds',
            damagetype: 'Physical',
            values: 1,
            units: 'total_ad',
            unitsText:
              'whirls her whip-blade over 1 second, dealing physical damage to nearby enemies every 0.25 seconds',
            pre: 'Nilah whirls her whip-blade over 1 second, dealing physical damage to nearby enemies every 0.25 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'She then unleashes a burst that deals physical damage and  pulls them 250 units towards her',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'then unleashes a burst that deals physical damage and  pulls them 250 units towards her',
            pre: 'She then unleashes a burst that deals physical damage and  pulls them 250 units towards her',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Each hit also  slows targets by 10% for 3 seconds, refreshing on subsequent hits.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 3 seconds, refreshing on subsequent hits.hit also  slows targets by 10',
            pre: 'Each hit also  slows targets by 10% for 3 seconds, refreshing on subsequent hits.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage per Tick:',
            values: '15 / 30 / 45 (+ 28% bonus AD)',
            valuesHTML:
              '15 / 30 / 45 <span style="color:orange; white-space:normal">(+&nbsp;28% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Physical Damage:',
            values: '125 / 225 / 325 (+ 120% bonus AD)',
            valuesHTML:
              '125 / 225 / 325 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Maximum Total Physical Damage:',
            values: '185 / 345 / 505 (+ 232% bonus AD)',
            valuesHTML:
              '185 / 345 / 505 <span style="color:orange; white-space:normal">(+&nbsp;232% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage per Tick:',
            raw: '15 / 30 / 45 (+ 28% bonus AD)',
            damagetype: 'Physical',
            values: [15, 30, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 30 / 45',
            children: [
              {
                values: 28,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 28% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '125 / 225 / 325 (+ 120% bonus AD)',
            damagetype: 'Physical',
            values: [125, 225, 325],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 225 / 325',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Maximum Total Physical Damage:',
            raw: '185 / 345 / 505 (+ 232% bonus AD)',
            damagetype: 'Physical',
            values: [185, 345, 505],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '185 / 345 / 505',
            children: [
              {
                values: 232,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 232% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Nilah  heals herself and nearby allied champions for 20% − 50% (based on critical strike chance) of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds.',
        descriptionHTML:
          '<b>Nilah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and nearby allied champions for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="20% + 0.3% per 1% critical strike chance, capped at 100% critical strike chance" data-bot_values="20;23;26;29;32;35;38;41;44;47;50" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">20% − 50% (based on critical strike chance)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, reduced to 10% against non-champions, converting each heal instance beyond <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that last 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Nilah  heals herself and nearby allied champions for 20% − 50% (based on critical strike chance) of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds.',
            healType: 'BonusHealth',
            values: 2,
            valuesIsPercent: true,
            basedOn: 'critical strike chance',
            units: 'maximum_hp',
            unitsText:
              'of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds.',
            pre: 'Nilah  heals herself and nearby allied champions for 20% − 50%',
            post: 'of the post-mitigation damage dealt to  champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a  shield that last 6 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Nilah is unable to basic attack and cast her other abilities during Apotheosis, but she is able to move.',
        descriptionHTML:
          '<i><b>Nilah</b> is unable to basic attack and cast her other <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during Apotheosis, but she is able to move.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    notes:
      '* <i>Apotheosis</i> can pull enemies through walls and can knock them across <b>Nilah\'s</b> location.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the burst damage.</li>\n<li><i>Apotheosis</i> shielding reuses indicators from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nilah" data-ability="Joy Unending" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nilah/LoL#Joy_Unending" title="Joy Unending"><img alt="Joy Unending" src="/wiki/images/Nilah_Joy_Unending.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nilah/LoL#Joy_Unending" title="Nilah/LoL">Joy Unending</a></span></span></i>.</li>\n<li>The following table refers for interactions while <b>Nilah</b> is performing <i>Apotheosis</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ironspike Whip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip"><img alt="Ironspike Whip" src="/wiki/images/Ironspike_Whip_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip">Ironspike Whip</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Goredrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Goredrinker" title="Goredrinker"><img alt="Goredrinker" src="/wiki/images/Goredrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Goredrinker" title="Goredrinker">Goredrinker</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
