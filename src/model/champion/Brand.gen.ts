import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Brand';

export default {
  Blaze: {
    name: 'Blaze',
    display_name: 'Blaze',
    champion: 'Brand',
    skill: 'I',
    image: {
      full: 'BrandP.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 475',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL" title="Brand\'s"><img alt="Brand\'s" src="/wiki/images/Brand_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL" title="Brand/LoL">Brand\'s</a></span></span> abilities apply a stack of <i>Ablaze</i> to enemies hit. Subsequent abilities used against a target with <i>Ablaze</i> are empowered. Killing an enemy afflicted with <i>Ablaze</i> or with an ability restores <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana</span></span>.',
      'At three stacks, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> become unstable and explode, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and applying a stack of <i>Ablaze</i>. <i>Ablaze</i> cannot stack more than once on enemies who have recently exploded.',
      '<span class="template_sbc"><b>Ablaze:</b></span> While afflicted with <i>Ablaze</i>, the target is continually dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to a portion of <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
    ],
    description: [
      {
        description:
          "Innate: Brand's abilities apply a stack of Ablaze to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Subsequent abilities used against a target with Ablaze are empowered. Killing an enemy afflicted with Ablaze or with an ability restores 20 − 40 (based on level)  mana.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Brand\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Ablaze</i> to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Subsequent abilities used against a target with <i>Ablaze</i> are empowered. Killing an enemy afflicted with <i>Ablaze</i> or with an ability restores <span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="20;23.33;26.67;30;33.33;36.67;40" data-top_values="1;3;6;9;12;15;18">20 − 40 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: "Brand's abilities apply a stack of Ablaze to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times",
            min: 0,
            max: 3,
            description:
              "Brand's abilities apply a stack of Ablaze to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times",
            values: 4,
            units: 'total_ap',
            unitsText:
              'abilities apply a stack of Ablaze to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times',
            pre: "Brand's abilities apply a stack of Ablaze to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times",
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Killing an enemy afflicted with Ablaze or with an ability restores 20 − 40 (based on level)  mana.',
            values: [
              20, 21.18, 22.35, 23.53, 24.71, 25.88, 27.06, 28.24, 29.41, 30.59,
              31.76, 32.94, 34.12, 35.29, 36.47, 37.65, 38.82, 40,
            ],
            basedOn: 'level',
            units: 'total_mana',
            unitsText: 'mana.',
            pre: 'Killing an enemy afflicted with Ablaze or with an ability restores 20 − 40',
            post: 'mana.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Blaze.png',
        description:
          'Ablaze: While afflicted with Ablaze, the target is dealt magic damage equal to「 2.5% of their maximum health over 3.25 seconds. 」「 0.83% of their maximum health every 1.083 seconds over 3.25 seconds. 」Ablaze deals 120% damage per tick to  monsters, capped at 80.',
        descriptionHTML:
          '<span class="template_sbc"><b>Ablaze:</b></span> While afflicted with <i>Ablaze</i>, the target is dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal">2.<small>5</small>% of their <b>maximum</b> health</span> over 3.<small>25</small> seconds.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal">0.<small>8<span style="text-decoration: overline;">3</span></small>% of their <b>maximum</b> health</span> every 1.<small>08<span style="text-decoration: overline;">3</span></small> seconds over 3.<small>25</small> seconds.&nbsp;」</span></span><i>Ablaze</i> deals 120% damage per tick to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, capped at 80.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Ablaze:',
            raw: 'While afflicted with Ablaze, the target is dealt magic damage equal to「 2.5% of their maximum health over 3.25 seconds. 」「 0.83% of their maximum health every 1.083 seconds over 3.25 seconds. 」Ablaze deals 120% damage per tick to  monsters, capped at 80.',
            healType: 'OutgoingHeals',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              'of their maximum health over 3.25 seconds. 」「 0.83afflicted with Ablaze, the target is dealt magic damage equal to「 2.5',
            pre: 'While afflicted with Ablaze, the target is dealt magic damage equal to「 2.5% of their maximum health over 3.25 seconds. 」「 0.83% of their maximum health every 1.083 seconds over 3.25 seconds. 」Ablaze deals 120% damage per tick to  monsters, capped at 80.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Blaze_2.png',
        description:
          'Upon applying 3 stacks of Ablaze to a large  monster or enemy  champion, the fire becomes unstable, forming an area around the target that grants  sight and explodes after 2 seconds, consuming all stacks. All enemies within the detonation are dealt magic damage equal to 9% − 13% (based on level) of their maximum health (+ 2% per 100 AP) and applied a stack of Ablaze. The explosion will still occur if the target dies to the ability applying the third stack or during the delay.',
        descriptionHTML:
          'Upon applying 3 stacks of <i>Ablaze</i> to a large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the fire becomes unstable, forming an area around the target that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> and explodes after 2 seconds, consuming all stacks. All enemies within the detonation are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="13;17" data-bot_values="9;9.25;9.5;9.75;10;10.25;10.5;10.75;11;11.25;11.5;11.75;12;12.25;12.5;12.75;13" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17" data-bot_key="%">9% − 13% (based on level)</span> of their <b>maximum</b> health</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> and applied a stack of <i>Ablaze</i>. <i>The explosion will still occur if the target dies to the ability applying the third stack or during the delay.</i>',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'Upon applying 3 stacks of Ablaze to a large  monster or enemy  champion, the fire becomes unstable, forming an area around the target that grants  sight and explodes after 2 seconds, consuming all stacks',
            min: 0,
            max: 10,
            description:
              'Upon applying 3 stacks of Ablaze to a large  monster or enemy  champion, the fire becomes unstable, forming an area around the target that grants  sight and explodes after 2 seconds, consuming all stacks',
            values: 3,
            units: 'total_ap',
            unitsText:
              'applying 3 stacks of Ablaze to a large  monster or enemy  champion, the fire becomes unstable, forming an area around the target that grants  sight and explodes after 2 seconds, consuming all stacks',
            pre: 'Upon applying 3 stacks of Ablaze to a large  monster or enemy  champion, the fire becomes unstable, forming an area around the target that grants  sight and explodes after 2 seconds, consuming all stacks',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'All enemies within the detonation are dealt magic damage equal to 9% − 13% (based on level) of their maximum health (+ 2% per 100 AP) and applied a stack of Ablaze',
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'of their maximum health',
            pre: 'All enemies within the detonation are dealt magic damage equal to 9% − 13%',
            post: 'of their maximum health',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
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
          'Brand cannot stack Ablaze more than once on enemies who have exploded in the last 4 seconds.',
        descriptionHTML:
          '<b>Brand</b> cannot stack <i>Ablaze</i> more than once on enemies who have exploded in the last 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'Brand cannot stack Ablaze more than once on enemies who have exploded in the last 4 seconds.',
            min: 0,
            max: 10,
            description:
              'Brand cannot stack Ablaze more than once on enemies who have exploded in the last 4 seconds.',
            values: 4,
            units: 'genericStacks',
            unitsText:
              'cannot stack Ablaze more than once on enemies who have exploded in the last 4 seconds.',
            pre: 'Brand cannot stack Ablaze more than once on enemies who have exploded in the last 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    spellshield: true,
    notes:
      '* <i>Ablaze</i> is a debuff that persists through <a href="/wiki/Death" title="Death">death</a>.\n<ul><li>The explosion is not considered a tether effect and will not affect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> targets, even if the explosion originated from them.</li>\n<li>Each stack deals the damage individually and will always consider the time it was applied for deciding when the ticks will be applied, even when the duration refreshes.\n<ul><li>At sub-optimal applied times, 2 stacks will deal a minimum of <span style="color: #1F995C; white-space:normal">6% <b>maximum</b> health</span> damage over 4 seconds, but will deal <span style="color: #1F995C; white-space:normal">7% <b>maximum</b> health</span> at optimal applied times.</li>\n<li>Against small-medium units 3 stacks will deal a minimum of <span style="color: #1F995C; white-space:normal">9% <b>maximum</b> health</span> at sub-optimal times, but <span style="color: #1F995C; white-space:normal">11% <b>maximum</b> health</span> at optimal times. If these stacks are further <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="By ablazing a target that\'s already at 3 stacks">refreshed</span> at optimal times they can deal up to <span style="color: #1F995C; white-space:normal">12% <b>maximum</b> health</span> over 4 seconds.</li></ul></li>\n<li>The burn is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent damage</a></span> and the explosion is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.</li></ul>',
    video: 'Brand IVideo.ogv',
  },
  Sear: {
    name: 'Sear',
    display_name: 'Sear',
    champion: 'Brand',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BrandQ.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1100 /  1040',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'mana',
    cooldown: '8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL" title="Brand"><img alt="Brand" src="/wiki/images/Brand_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL" title="Brand/LoL">Brand</a></span></span> launches a fireball in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> An <i>Ablaze</i> target hit will also be briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Sear.png',
        description:
          'Active: Brand launches a fireball in the target direction that deals magic damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Brand</b> launches a fireball in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 55% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 55% AP)',
            damagetype: 'Magic',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Ablaze Bonus: The target is  stunned for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Ablaze Bonus:',
            raw: 'The target is  stunned for 1.5 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'target is  stunned for 1.5 seconds.',
            pre: 'The target is  stunned for 1.5 seconds.',
          },
        ],
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
      '* With an ability haste value of 81 / 70 / 58 / 47 / 36 to 162 / 145 / 129 / 113 / 96 based on the ranges of applications from the target, it is possible to apply the stun without having to use other abilities. <i>Sear</i> will apply before the duration of the pre-applied <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Blaze"><img alt="Blaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Blaze</a></span></span> times out.\n<ul><li><ul><li>The needed ability haste value if you remained at the same range from the target for both casts would be 114 / 100 / 87 / 74 / 60.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Brand QVideo.ogv',
  },
  'Pillar of Flame': {
    name: 'Pillar of Flame',
    display_name: 'Pillar of Flame',
    champion: 'Brand',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'BrandW.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 260',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> After a brief delay, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL" title="Brand"><img alt="Brand" src="/wiki/images/Brand_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL" title="Brand/LoL">Brand</a></span></span> erupts a pillar of flame at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> An <i>Ablaze</i> target hit will take bonus damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Pillar_of_Flame.png',
        description:
          'Active: After a 0.627 seconds delay, Brand erupts a pillar of flame at the target location that deals magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> After a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.625 seconds, but rounded up to the next game tick.">0.<small>627</small> seconds</span> delay, <b>Brand</b> erupts a pillar of flame at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 120 / 165 / 210 / 255 (+ 60% AP)',
            valuesHTML:
              '75 / 120 / 165 / 210 / 255 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 60% AP)',
            damagetype: 'Magic',
            values: [75, 120, 165, 210, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 120 / 165 / 210 / 255',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Ablaze Bonus: The target takes 25% increased damage.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> The target takes 25% increased damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Ablaze Bonus:',
            raw: 'The target takes 25% increased damage.',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'increased damage.target takes 25',
            pre: 'The target takes 25% increased damage.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '93.75 / 150 / 206.25 / 262.5 / 318.75 (+ 75% AP)',
            valuesHTML:
              '93.<small>75</small> / 150 / 206.<small>25</small> / 262.<small>5</small> / 318.<small>75</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '93.75 / 150 / 206.25 / 262.5 / 318.75 (+ 75% AP)',
            damagetype: 'None',
            values: [93.75, 150, 206.25, 262.5, 318.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '93.75 / 150 / 206.25 / 262.5 / 318.75',
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
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* The delay before the eruption does not include the cast time. The delay would be a total of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.889 seconds, but rounded up to the next game tick.">0.<small>891</small> seconds</span> if it included the cast time.',
    video: 'Brand WVideo.ogv',
  },
  Conflagration: {
    name: 'Conflagration',
    display_name: 'Conflagration',
    champion: 'Brand',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'BrandE.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '675',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 300 / 600',
    cast_time: '0.<small>25</small>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL" title="Brand"><img alt="Brand" src="/wiki/images/Brand_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL" title="Brand/LoL">Brand</a></span></span> sets the target enemy aflame, which creates a blast that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to them and nearby enemies.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> The blast spreads twice as far on an <i>Ablaze</i> target.',
    ],
    description: [
      {
        icon: '/wiki/images/Conflagration.png',
        description:
          'Active: Brand sets the target enemy aflame, which creates a blast that deals magic damage to them and nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Brand</b> sets the target enemy aflame, which creates a blast that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to them and nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 95 / 120 / 145 / 170 (+ 45% AP)',
            valuesHTML:
              '70 / 95 / 120 / 145 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 45% AP)',
            damagetype: 'Magic',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
            children: [
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
        icon: '/wiki/images/undefined',
        description: "Ablaze Bonus: Conflagration's spread range is doubled.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> <i>Conflagration\'s</i> spread range is doubled.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'False',
    callforhelp: 'True',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
    video: 'Brand EVideo.ogv',
  },
  Pyroclasm: {
    name: 'Pyroclasm',
    display_name: 'Pyroclasm',
    champion: 'Brand',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'BrandR.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '750',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="bounce range, checked when fireball arrives at a target">600</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Acceleration 500u/s">750 - 3000</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '105 / 90 / 75',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL" title="Brand"><img alt="Brand" src="/wiki/images/Brand_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL" title="Brand/LoL">Brand</a></span></span> unleashes a devastating torrent of fire that bounces to nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> each time it bounces.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> An <i>Ablaze</i> target will also be briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> when hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Pyroclasm.png',
        description:
          'Active: Brand launches a fireball at the target enemy that bounces between nearby enemies and Brand up to four times, dealing magic damage to enemies each time.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Brand</b> launches a fireball at the target enemy that bounces between nearby enemies and <b>Brand</b> up to four times, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies each time.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 150 / 200 / 250 / 300 (+ 25% AP)',
            valuesHTML:
              '100 / 150 / 200 / 250 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 25% AP)',
            damagetype: 'Magic',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Pyroclasm prioritizes  ablazed enemy champions, then other enemy champions, then any valid bounce target, then Brand.',
        descriptionHTML:
          '<i>Pyroclasm prioritizes </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="ablazed"><img alt="ablazed" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">ablazed</a></span></span><i> enemy champions, then other enemy champions, then any valid bounce target, then <b>Brand</b>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The target does not have to be  visible for the fireball to bounce to them.',
        descriptionHTML:
          '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> for the fireball to bounce to them.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Ablaze Bonus: The target is  slowed for 0.25 seconds. This can affect the same enemy more than once.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 0.<small>25</small> seconds. This can affect the same enemy more than once.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: '',
        descriptionHTML: '',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Slow:',
            values: '30 / 37.5 / 45 / 52.5 / 60%',
            valuesHTML:
              '30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'True',
    callforhelp: 'false',
    notes:
      '* If <i>Pyroclasm\'s</i> current target becomes invalid, it selects a new target at its remaining bounces.\n<ul><li><ul><li>The fireball will bounce to <b>Brand</b> even if he becomes an invalid target while it is currently on a target or is in flight towards him.</li></ul></li>\n<li>The fireball acquires a new target as soon as it hits its current target.\n<ul><li>If the new target becomes invalid, the fireball will fizzle.</li></ul></li>\n<li>The fireball may only bounce to valid targets, including <b>Brand</b>.</li>\n<li>If the initial cast target uses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>, <i>Pyroclasm</i> will not bounce. If the bounce is blocked by an enemy\'s <i>spell shield</i> it will not deal any damage, but it will keep on bouncing.</li>\n<li><i>Pyroclasm\'s</i> damage against enemy champions will not aggro nearby enemy minions.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    video: 'Brand RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
