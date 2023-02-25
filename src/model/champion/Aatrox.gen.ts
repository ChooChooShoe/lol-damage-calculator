import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Aatrox';

export default {
  'Deathbringer Stance': {
    name: 'Deathbringer Stance',
    display_name: 'Deathbringer Stance',
    champion: 'Aatrox',
    skill: 'I',
    image: {
      full: 'Aatrox_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="24;" data-finish="12;" data-bot_values="24;23.29;22.59;21.88;21.18;20.47;19.76;19.06;18.35;17.65;16.94;16.24;15.53;14.82;14.12;13.41;12.71;12" data-top_values="">24 − 12 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL" title="Aatrox\'s"><img alt="Aatrox\'s" src="/wiki/images/Aatrox_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL" title="Aatrox/LoL">Aatrox\'s</a></span></span> next basic attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>, <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;healing</span></span> him for the damage dealt.',
      '<b>Aatrox\'s</b> basic attacks and ability hits against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> reduce <i>Deathbringer Stance\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Deathbringer_Stance.png',
        description:
          "Innate: Periodically, Aatrox empowers his next basic attack to gain  50 bonus range and deal bonus physical damage equal to 4% − 10% (based on level) of the target's maximum health, capped at 100 against  monsters. Aatrox  heals for 80% of the post-mitigation bonus damage dealt, reduced to 25% against  minions.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Aatrox</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4;" data-finish="10;" data-bot_values="4;4.35;4.71;5.06;5.41;5.76;6.12;6.47;6.82;7.18;7.53;7.88;8.24;8.59;8.94;9.29;9.65;10" data-top_values="" data-bot_key="%">4% − 10% (based on level)</span> of the target\'s <b>maximum</b> health</span>, capped at 100 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.<br> <b>Aatrox</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for 80% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation <b>bonus</b> damage</span> dealt, reduced to 25% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: "Periodically, Aatrox empowers his next basic attack to gain  50 bonus range and deal bonus physical damage equal to 4% − 10% (based on level) of the target's maximum health, capped at 100 against  monsters",
            healType: 'PhysicalVamp',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              "of the target's maximum health, capped at 100 against  monsters",
            pre: 'Periodically, Aatrox empowers his next basic attack to gain  50 bonus range and deal bonus physical damage equal to 4% − 10%',
            post: "of the target's maximum health, capped at 100 against  monsters",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Aatrox  heals for 80% of the post-mitigation bonus damage dealt, reduced to 25% against  minions.',
            healType: 'BonusHealth',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the post-mitigation bonus damage dealt, reduced to 25 heals for 80',
            pre: 'Aatrox  heals for 80% of the post-mitigation bonus damage dealt, reduced to 25% against  minions.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Whenever Aatrox hits at least one enemy  champion or large  monster with a basic attack  on-hit or an ability, the  cooldown of Deathbringer Stance is reduced by 2 seconds, modified to 4 if he hits with the Sweetspot of  The Darkin Blade.',
        descriptionHTML:
          'Whenever <b>Aatrox</b> hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> with a basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> or an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of <i>Deathbringer Stance</i> is reduced by 2 seconds, modified to 4 if he hits with the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-ability="The Darkin Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL#The_Darkin_Blade" title="The Darkin Blade"><img alt="The Darkin Blade" src="/wiki/images/Aatrox_The_Darkin_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL#The_Darkin_Blade" title="Aatrox/LoL">The Darkin Blade</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Whenever Aatrox hits at least one enemy  champion or large  monster with a basic attack  on-hit or an ability, the  cooldown of Deathbringer Stance is reduced by 2 seconds, modified to 4 if he hits with the Sweetspot of  The Darkin Blade.',
            damagetype: 'None',
            values: 2,
            units: 'total_ad',
            unitsText:
              'Aatrox hits at least one enemy  champion or large  monster with a basic attack  on-hit or an ability, the  cooldown of Deathbringer Stance is reduced by 2 seconds, modified to 4 if he hits with the Sweetspot of  The Darkin Blade.',
            pre: 'Whenever Aatrox hits at least one enemy  champion or large  monster with a basic attack  on-hit or an ability, the  cooldown of Deathbringer Stance is reduced by 2 seconds, modified to 4 if he hits with the Sweetspot of  The Darkin Blade.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'physical',
    spelleffects: 'proc',
    spellshield: false,
    notes:
      '* <b>Aatrox</b> will assume stance when an enemy champion is in range of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-ability="Infernal Chains" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL#Infernal_Chains" title="Infernal Chains"><img alt="Infernal Chains" src="/wiki/images/Aatrox_Infernal_Chains.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL#Infernal_Chains" title="Aatrox/LoL">Infernal Chains</a></span></span>.\n<ul><li><ul><li>Pressing <span class="template_sbc"><b>CTRL + 5</b></span> switches stances controllably.</li></ul></li>\n<li>If <i>Deathbringer Stance</i> becomes available during a standard attack\'s windup, it will not be consumed or trigger the <b>bonus</b> damage.</li>\n<li>Even if the ability hit is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shielded</a></span> <i>Deathbringer Stance\'s</i> cooldown will still be reduced.</li>\n<li>This ability goes on cooldown on death and refreshes upon respawn.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'The Darkin Blade': {
    name: 'The Darkin Blade',
    display_name: 'The Darkin Blade',
    champion: 'Aatrox',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AatroxQ.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    range: 'Varied',
    cast_time: '0.<small>6</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cooldown starts on first cast and restarts on each successive recast">14 / 12 / 10 / 8 / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL" title="Aatrox"><img alt="Aatrox" src="/wiki/images/Aatrox_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL" title="Aatrox/LoL">Aatrox</a></span></span> can cast this ability up to three times in quick succession, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit in an area. Enemies hit in the area\'s <span style="color: #E34D4C; white-space:normal">Sweetspot</span> take increased damage and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> briefly.\n<ul><li><img alt="The Darkin Blade.png" src="/wiki/images/Aatrox_The_Darkin_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <span class="template_sbc"><b>First Cast:</b></span> <b>Aatrox</b> strikes his greatsword in a long rectangle.</li>\n<li><img alt="The Darkin Blade 2.png" src="/wiki/images/Aatrox_The_Darkin_Blade_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <span class="template_sbc"><b>Second Cast:</b></span> <b>Aatrox</b> slashes his greatsword in a wide trapezoid.</li>\n<li><img alt="The Darkin Blade 3.png" src="/wiki/images/Aatrox_The_Darkin_Blade_3.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <span class="template_sbc"><b>Third Cast:</b></span> <b>Aatrox</b> slams his greatsword in a circle.</li></ul>',
    ],
    description: [
      {
        description:
          'Active: Aatrox can activate The Darkin Blade three times before the ability goes on cooldown, with a 1 second static cooldown between casts. If Aatrox does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> can activate <i>The Darkin Blade</i> three times before the ability goes on cooldown, with a 1 second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. If <b>Aatrox</b> does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Aatrox can activate The Darkin Blade three times before the ability goes on cooldown, with a 1 second static cooldown between casts',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'can activate The Darkin Blade three times before the ability goes on cooldown, with a 1 second static cooldown between casts',
            pre: 'Aatrox can activate The Darkin Blade three times before the ability goes on cooldown, with a 1 second static cooldown between casts',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If Aatrox does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'Aatrox does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
            pre: 'If Aatrox does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Aatrox performs a strike with his greatsword for each of the three casts, dealing physical damage to enemies hit within an area. Enemies hit within a Sweetspot of the area take  60% bonus damage and also  knocked up for 0.25 seconds. Each subsequent cast increases The Darkin Blade's damage by 25%.",
        descriptionHTML:
          '<b>Aatrox</b> performs a strike with his greatsword for each of the three casts, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit within an area. Enemies hit within a <span style="color: #E34D4C; white-space:normal">Sweetspot</span> of the area take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">60% <b>bonus</b> damage</span> and also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>25</small> seconds. Each subsequent cast increases <i>The Darkin Blade\'s</i> damage by 25%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies hit within a Sweetspot of the area take  60% bonus damage and also  knocked up for 0.25 seconds',
            damagetype: 'None',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus damage and also  knocked up for 0.25 secondshit within a Sweetspot of the area take  60',
            pre: 'Enemies hit within a Sweetspot of the area take  60% bonus damage and also  knocked up for 0.25 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: "Each subsequent cast increases The Darkin Blade's damage by 25%.",
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              ".subsequent cast increases The Darkin Blade's damage by 25",
            pre: "Each subsequent cast increases The Darkin Blade's damage by 25%.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/The_Darkin_Blade.png',
        description:
          "First Cast: Aatrox's first strike affects a 625 × 180-unit rectangular area in the target direction, with him centered on the back line and the Sweetspot at the farthest edge.",
        descriptionHTML:
          '<span class="template_sbc"><b>First Cast:</b></span> <b>Aatrox\'s</b> first strike affects a 625&nbsp;×&nbsp;180-unit rectangular area in the target direction, with him centered on the back line and the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> at the farthest edge.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'First Cast:',
            raw: "Aatrox's first strike affects a 625 × 180-unit rectangular area in the target direction, with him centered on the back line and the Sweetspot at the farthest edge.",
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'first strike affects a 625 × 180-unit rectangular area in the target direction, with him centered on the back line and the Sweetspot at the farthest edge.',
            pre: "Aatrox's first strike affects a 625 × 180-unit rectangular area in the target direction, with him centered on the back line and the Sweetspot at the farthest edge.",
          },
        ],
        leveling: [
          {
            name: 'First Cast Damage:',
            values: '10 / 30 / 50 / 70 / 90 (+ 60 / 65 / 70 / 75 / 80% AD)',
            valuesHTML:
              '10 / 30 / 50 / 70 / 90 <span style="color:orange; white-space:normal">(+&nbsp;60 / 65 / 70 / 75 / 80% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'First Cast Damage:',
            raw: '10 / 30 / 50 / 70 / 90 (+ 60 / 65 / 70 / 75 / 80% AD)',
            damagetype: 'None',
            values: [10, 30, 50, 70, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 30 / 50 / 70 / 90',
            children: [
              {
                values: [60, 65, 70, 75, 80],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 60 / 65 / 70 / 75 / 80% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/The_Darkin_Blade_2.png',
        description:
          "Second Cast: Aatrox's second strike affects a trapezoidal area in the target direction, with the Sweetspot at the farthest edge. The hitbox begins 100-units behind Aatrox and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.",
        descriptionHTML:
          '<span class="template_sbc"><b>Second Cast:</b></span> <b>Aatrox\'s</b> second strike affects a trapezoidal area in the target direction, with the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> at the farthest edge. The hitbox begins 100-units behind <b>Aatrox</b> and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The hitbox begins 100-units behind Aatrox and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'hitbox begins 100-units behind Aatrox and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.',
            pre: 'The hitbox begins 100-units behind Aatrox and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.',
          },
        ],
        leveling: [
          {
            name: 'Second Cast Damage:',
            values:
              '12.5 / 37.5 / 62.5 / 87.5 / 112.5 (+ 75 / 81.25 / 87.5 / 93.75 / 100% AD)',
            valuesHTML:
              '12.<small>5</small> / 37.<small>5</small> / 62.<small>5</small> / 87.<small>5</small> / 112.<small>5</small> <span style="color:orange; white-space:normal">(+&nbsp;75 / 81.<small>25</small> / 87.<small>5</small> / 93.<small>75</small> / 100% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Second Cast Damage:',
            raw: '12.5 / 37.5 / 62.5 / 87.5 / 112.5 (+ 75 / 81.25 / 87.5 / 93.75 / 100% AD)',
            damagetype: 'None',
            values: [12.5, 37.5, 62.5, 87.5, 112.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12.5 / 37.5 / 62.5 / 87.5 / 112.5',
            children: [
              {
                values: [75, 81.25, 87.5, 93.75, 100],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 75 / 81.25 / 87.5 / 93.75 / 100% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/The_Darkin_Blade_3.png',
        description:
          "Third Cast: Aatrox's third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius Sweetspot within.",
        descriptionHTML:
          '<span class="template_sbc"><b>Third Cast:</b></span> <b>Aatrox\'s</b> third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius <span style="color: #E34D4C; white-space:normal">Sweetspot</span> within.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Third Cast:',
            raw: "Aatrox's third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius Sweetspot within.",
            damagetype: 'None',
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius Sweetspot within.',
            pre: "Aatrox's third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius Sweetspot within.",
          },
        ],
        leveling: [
          {
            name: 'Third Cast Damage:',
            values:
              '15 / 45 / 75 / 105 / 135 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
            valuesHTML:
              '15 / 45 / 75 / 105 / 135 <span style="color:orange; white-space:normal">(+&nbsp;90 / 97.<small>5</small> / 105 / 112.<small>5</small> / 120% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Third Cast Damage:',
            raw: '15 / 45 / 75 / 105 / 135 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
            damagetype: 'None',
            values: [15, 45, 75, 105, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 45 / 75 / 105 / 135',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <figure class="thumb tright " style="width: 180px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/b/b8/Aatrox_hitbox_areas.png/revision/latest?cb=20200518135502" class="image"><img alt="" src="/wiki/images/Aatrox_hitbox_areas.png" decoding="async" loading="lazy" width="180" height="366" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/b/b8/Aatrox_hitbox_areas.png/revision/latest?cb=20200518135502" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/b/b8/Aatrox_hitbox_areas.png/revision/latest/scale-to-width-down/180?cb=20200518135502" decoding="async" loading="lazy" width="180" height="366" class="thumbimage" data-image-name="Aatrox hitbox areas.png" data-image-key="Aatrox_hitbox_areas.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/b/b8/Aatrox_hitbox_areas.png/revision/latest/scale-to-width-down/180?cb=20200518135502"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">The highlighted areas denote the sweetspot - enemies are affected where the two areas overlap (See <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">edge range</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">center range</a></span>).</p> \t\t \t</figcaption> </figure> The first and second casts function like any point-blank AOE (i.e. an effect centered on the caster). An enemy is considered to be hit by the ability based on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">edge range</a></span> - i.e. if any part of your <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span> is within the hitbox, you are affected.\n<ul><li>The third cast, as well as the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> for the first and second cast, function like <a href="/wiki/Ground-targeted" class="mw-redirect" title="Ground-targeted">ground-targeted</a> abilities. An enemy is considered to be hit by the ability based on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">center range</a></span> - i.e. an enemy\'s center has to be within the hitbox to be affected.</li>\n<li>As implied by the previous point, the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> for the first and second cast is implemented as separate <a href="/wiki/Area_of_effect" title="Area of effect">areas of effect</a> to the main component of the ability. Enemies must be within both areas to trigger the bonus damage, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-ability="Deathbringer Stance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL#Deathbringer_Stance" title="Deathbringer Stance\'s"><img alt="Deathbringer Stance\'s" src="/wiki/images/Aatrox_Deathbringer_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL#Deathbringer_Stance" title="Aatrox/LoL">Deathbringer Stance\'s</a></span></span> cooldown reduction.\n<ul><li>The \'target gets hit\' SFX plays whenever an enemy is within the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> - meaning it is possible to trigger the sound effect without affecting an enemy.</li></ul></li>\n<li>Each cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.</li>\n<li>The hitbox and <b>Aatrox\'s</b> model are fixed to the initial target direction.\n<ul><li><b>Aatrox\'s</b> facing-direction, for effects such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-ability="Petrifying Gaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Petrifying Gaze"><img alt="Petrifying Gaze" src="/wiki/images/Cassiopeia_Petrifying_Gaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Cassiopeia/LoL">Petrifying Gaze</a></span></span>, is the direction he is moving, and not the direction the model is facing.</li></ul></li>\n<li>All damage modifiers <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stack multiplicatively</a></span>.</li>\n<li>There\'s a small period of time in which Aatrox can\'t declare basic attacks after casting <i>The Darkin Blade</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-ability="Umbral Dash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL#Umbral_Dash" title="Umbral Dash"><img alt="Umbral Dash" src="/wiki/images/Aatrox_Umbral_Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL#Umbral_Dash" title="Aatrox/LoL">Umbral Dash</a></span></span> can be cast. Other abilities are disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    video: 'Aatrox - Q',
  },
  'Infernal Chains': {
    name: 'Infernal Chains',
    display_name: 'Infernal Chains',
    champion: 'Aatrox',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AatroxW.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '825 /  765',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 160',
    speed: '1800',
    cast_time: '0.<small>25</small>',
    cooldown: '20 / 18.<small>5</small> / 17 / 15.<small>5</small> / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL" title="Aatrox"><img alt="Aatrox" src="/wiki/images/Aatrox_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL" title="Aatrox/LoL">Aatrox</a></span></span> sends a chain in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first enemy hit.',
      'If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, it creates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between them and the ground. If the tether is not broken after a brief moment, they are dealt <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled back</a></span> to the center.',
    ],
    description: [
      {
        icon: '/wiki/images/Infernal_Chains.png',
        description:
          'Active: Aatrox sends a chain in the target direction that deals physical damage to the first enemy hit, doubled against  minions, and  slowing them by 25% for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> sends a chain in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 25% for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Aatrox sends a chain in the target direction that deals physical damage to the first enemy hit, doubled against  minions, and  slowing them by 25% for 1.5 seconds.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1.5 seconds.sends a chain in the target direction that deals physical damage to the first enemy hit, doubled against  minions, and  slowing them by 25',
            pre: 'Aatrox sends a chain in the target direction that deals physical damage to the first enemy hit, doubled against  minions, and  slowing them by 25% for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '30 / 40 / 50 / 60 / 70 (+ 40% AD)',
            valuesHTML:
              '30 / 40 / 50 / 60 / 70 <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 40 / 50 / 60 / 70 (+ 40% AD)',
            damagetype: 'Physical',
            values: [30, 40, 50, 60, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If this hits an enemy  champion or large  monster, a  tether is formed between the target and the ground beneath them for 1.5 seconds, during which they are  revealed.',
        descriptionHTML:
          'If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> is formed between the target and the ground beneath them for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If this hits an enemy  champion or large  monster, a  tether is formed between the target and the ground beneath them for 1.5 seconds, during which they are  revealed.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'this hits an enemy  champion or large  monster, a  tether is formed between the target and the ground beneath them for 1.5 seconds, during which they are  revealed.',
            pre: 'If this hits an enemy  champion or large  monster, a  tether is formed between the target and the ground beneath them for 1.5 seconds, during which they are  revealed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the tether is not broken by the end of its duration, the target is dealt the same physical damage again and  pulled to the center of the area.',
        descriptionHTML:
          'If the tether is not broken by the end of its duration, the target is dealt the same <span style="color: #FF8C34; white-space:normal">physical damage</span> again and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> to the center of the area.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Damage:',
            values: '60 / 80 / 100 / 120 / 140 (+ 80% AD)',
            valuesHTML:
              '60 / 80 / 100 / 120 / 140 <span style="color:orange; white-space:normal">(+&nbsp;80% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 80% AD)',
            damagetype: 'None',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80% AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* The impact area is oriented relative to <b>Aatrox\'s</b> position when the projectile hits, not where the projectile originated from.\n<ul><li>The location that the target is dragged to is not at the target\'s original location, but slightly closer towards <b>Aatrox\'s</b> position when the zone expires.</li>\n<li>There\'s a small delay in checking if the target is in or outside the <i>Infernal Chains</i> area. Because of this it is still possible to drag the target if they leave the zone at the last instant.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the chain\'s application and initial damage but not the aftereffects of one already applied.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Aatrox - W',
  },
  'Umbral Dash': {
    name: 'Umbral Dash',
    display_name: 'Umbral Dash',
    champion: 'Aatrox',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AatroxE.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '75 / 300 / 500',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slightly higher when measured">800</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="When dashing through thick terrain">Up to 1340</span>',
    cast_time: 'none',
    cooldown: '9 / 8 / 7 / 6 / 5',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL" title="Aatrox"><img alt="Aatrox" src="/wiki/images/Aatrox_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL" title="Aatrox/LoL">Aatrox</a></span></span> <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heals</span></span> for the portion of the damage he deals to champions.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction.',
      '<i>Umbral Dash be cast during other abilities without cancelling them and vice versa.</i>',
    ],
    description: [
      {
        description:
          'Passive: Aatrox  heals for a portion of the non- persistent post-mitigation damage he deals against enemy champions, increased during  World Ender.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Aatrox</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for a portion of the non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he deals against enemy champions, increased during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-ability="World Ender" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL#World_Ender" title="World Ender"><img alt="World Ender" src="/wiki/images/Aatrox_World_Ender.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL#World_Ender" title="Aatrox/LoL">World Ender</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Healing:',
            values: '18 / 19.5 / 21 / 22.5 / 24%',
            valuesHTML:
              '18 / 19.<small>5</small> / 21 / 22.<small>5</small> / 24%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Healing:',
            raw: '18 / 19.5 / 21 / 22.5 / 24%',
            healType: 'DrainEffect',
            values: [18, 19.5, 21, 22.5, 24],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '18 / 19.5 / 21 / 22.5 / 24%',
          },
        ],
      },
      {
        icon: '/wiki/images/Umbral_Dash.png',
        description: 'Active: Aatrox  dashes in the target direction.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Umbral Dash  resets Aatrox's basic attack timer and can be cast during his other abilities without cancelling them and vice versa.",
        descriptionHTML:
          '<i>Umbral Dash <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Aatrox\'s</b> basic attack timer and can be cast during his other abilities without cancelling them and vice versa.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> distance can be extended to up-to 500 units when targeting across terrain. It will only extend for the distance needed to cross the wall.\n<ul><li><ul><li>This may upscale his dash speed so that the dash takes the same total time as the standard maximum-range dash.</li></ul></li>\n<li>If <i>Umbral Dash</i> is cast in the same direction <b>Aatrox</b> is moving, he will be unable to buffer commands that require him to move. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><b>Aatrox\'s</b> model darkens for 1.<small>5</small> seconds upon casting <i>Umbral Dash</i>, which is a remnant from a buff he received before it got removed.</li></ul>',
    video: 'Aatrox - E',
  },
  'World Ender': {
    name: 'World Ender',
    display_name: 'World Ender',
    champion: 'Aatrox',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'AatroxR.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Flee radius">600</span>',
    cast_time: '0.<small>25</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL" title="Aatrox"><img alt="Aatrox" src="/wiki/images/Aatrox_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL" title="Aatrox/LoL">Aatrox</a></span></span> unleashes his true form for a period, gaining a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>. During this time, <b>Aatrox</b> has increased <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack damage</span></span> and <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;self-healing</span></span>.',
      'Whenever <b>Aatrox</b> scores a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>, he extends the duration and unleashes again.',
    ],
    description: [
      {
        icon: '/wiki/images/World_Ender.png',
        description:
          'Active: Aatrox unleashes his true form for 10 seconds,  fearing nearby enemy  minions and  monsters for 3 seconds, during which they are gradually  slowed by up to 99% over the duration. He also gains  ghosting and  bonus movement speed that decays by 10% of the current bonus every 0.25 seconds, lasting until World Ender has ended.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> unleashes his true form for 10 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> for 3 seconds, during which they are gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by up to 99% over the duration. He also gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays by 10% of the <b>current bonus</b> every 0.<small>25</small> seconds, lasting until <i>World Ender</i> has ended.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Aatrox unleashes his true form for 10 seconds,  fearing nearby enemy  minions and  monsters for 3 seconds, during which they are gradually  slowed by up to 99% over the duration',
            damagetype: 'True',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'over the durationunleashes his true form for 10 seconds,  fearing nearby enemy  minions and  monsters for 3 seconds, during which they are gradually  slowed by up to 99',
            pre: 'Aatrox unleashes his true form for 10 seconds,  fearing nearby enemy  minions and  monsters for 3 seconds, during which they are gradually  slowed by up to 99% over the duration',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He also gains  ghosting and  bonus movement speed that decays by 10% of the current bonus every 0.25 seconds, lasting until World Ender has ended.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the current bonus every 0.25 seconds, lasting until World Ender has ended.also gains  ghosting and  bonus movement speed that decays by 10',
            pre: 'He also gains  ghosting and  bonus movement speed that decays by 10% of the current bonus every 0.25 seconds, lasting until World Ender has ended.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '50 / 57.5 / 65 / 72.5 / 80%',
            valuesHTML:
              '50 / 57.<small>5</small> / 65 / 72.<small>5</small> / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '50 / 57.5 / 65 / 72.5 / 80%',
            values: [50, 57.5, 65, 72.5, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 57.5 / 65 / 72.5 / 80%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Whenever Aatrox scores a champion  takedown, he extends the duration by 5 seconds and becomes unleashed again.',
        descriptionHTML:
          'Whenever <b>Aatrox</b> scores a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>, he extends the duration by 5 seconds and becomes unleashed again.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Whenever Aatrox scores a champion  takedown, he extends the duration by 5 seconds and becomes unleashed again.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'Aatrox scores a champion  takedown, he extends the duration by 5 seconds and becomes unleashed again.',
            pre: 'Whenever Aatrox scores a champion  takedown, he extends the duration by 5 seconds and becomes unleashed again.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'During World Ender, Aatrox gains  bonus attack damage and 5% increased size, and receives increased  self-healing from all sources.',
        descriptionHTML:
          'During <i>World Ender</i>, <b>Aatrox</b> gains <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack damage</span></span> and 5% increased <a href="/wiki/Size" title="Size">size</a>, and receives increased <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">self-healing</a></span> from all sources.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'During World Ender, Aatrox gains  bonus attack damage and 5% increased size, and receives increased  self-healing from all sources.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText:
              'increased size, and receives increased  self-healing from all sources.World Ender, Aatrox gains  bonus attack damage and 5',
            pre: 'During World Ender, Aatrox gains  bonus attack damage and 5% increased size, and receives increased  self-healing from all sources.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '20 / 25 / 30 / 35 / 40% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">20 / 25 / 30 / 35 / 40% AD</span>',
          },
          {
            name: 'Increased Healing:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '20 / 25 / 30 / 35 / 40% AD',
            damagetype: 'None',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '20 / 25 / 30 / 35 / 40% AD',
          },
          {
            effectType: 'Heal',
            name: 'Increased Healing:',
            raw: '25 / 30 / 35 / 40 / 45%',
            healType: 'DrainEffect',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    notes:
      '* His resource bar indicates the remaining duration of <i>World Ender</i>.\n<ul><li><i>World Ender</i> persists through <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects.\n<ul><li><i>World Ender\'s</i> healing amplification applies to the health gained by resurrecting.</li></ul></li>\n<li><i>World Ender</i> will cast from wherever <b>Aatrox</b> is at the end of the cast time.</li>\n<li>Casting <i>World Ender</i> while it is still active renders <b>Aatrox\'s</b> wings invisible and removes the timer on the resource bar. <sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>This is possible via <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Axiom Arc" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Axiom_Arc" title="Axiom Arc\'s"><img alt="Axiom Arc\'s" src="/wiki/images/Axiom_Arc_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Axiom_Arc" title="Axiom Arc">Axiom Arc\'s</a></span></span> or <a href="/wiki/Practice_Tool" title="Practice Tool">Practice Tool\'s</a> cooldown reduction or by going on a very long killing spree.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Aatrox_Original_MoveUltReady_7.ogg   "I am Aatrox, I am the World Ender!"',
  },
} satisfies { [skillName in string]: SkillData };
