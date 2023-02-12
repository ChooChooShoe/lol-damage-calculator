import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Lissandra';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Lissandra_Iceborn_Subjugation.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever a nearby enemy champion dies, <b>Lissandra</b> spawns a <i>Frozen Thrall</i> from their corpse.<br><br><i>Frozen Thralls</i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> ice spirits that have <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="seconds" data-bot_values="33.48;78.65;117.33;149.82;177.78;201.18;221.33;238.23;252.85;263.9;275.6;284.7;292.18;298.68;303.88;308.75;325" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3;3.25;3.5;3.75;4">33.<small>48</small> − 325 (based on seconds)</span> movement speed</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> nearby enemies by 25%. They will chase nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies for 4 seconds, prioritizing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, after which they shatter to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="120;140;160;180;200;220;240;260;280;300;320;340;370;400;430;460;490;520" data-top_values="">120 − 520 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '48 − 325 (based on seconds) movement speed and  slow nearby enemies by 25%',
        values: [48, 325],
        user: 'none',
        units: '',
        unitsText: 'movement speed and  slow nearby enemies by 25%',
        pre: '48 − 325',
        post: 'movement speed and  slow nearby enemies by 25%',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on seconds',
            pre: 'based on seconds',
          },
        ],
      },
      {
        effectType: 'Damage',
        name: 'Line 4:',
        raw: ' They will chase nearby  visible enemies for 4 seconds, prioritizing  champions, after which they shatter to deal 120 − 520 (based on level) (+ 50% AP) magic damage to nearby enemies',
        damagetype: 'Magic',
        values: [
          120, 143.53, 167.06, 190.59, 214.12, 237.65, 261.18, 284.71, 308.24,
          331.76, 355.29, 378.82, 402.35, 425.88, 449.41, 472.94, 496.47, 520,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage to nearby enemies',
        pre: 'They will chase nearby  visible enemies for 4 seconds, prioritizing  champions, after which they shatter to deal 120 − 520',
        post: 'magic damage to nearby enemies',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Lissandra_Ice_Shard.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> launches a shard of ice in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. The first target hit is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 80% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '20 / 24 / 28 / 32 / 36%',
        values: [20, 24, 28, 32, 36],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 24 / 28 / 32 / 36%',
      },
    ],
  },
  {
    description:
      'If <i>Ice Shard</i> hits an enemy, it will shatter, increasing its width and maximum range.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Lissandra_Ring_of_Frost.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> freezes nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Root Duration:',
        raw: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
        values: [1.1, 1.2, 1.3, 1.4, 1.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Lissandra_Glacial_Path.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> sends a claw of ice in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies it passes through, decelerating over 1.<small>25</small> seconds. <i>Glacial Path</i> can be recast after 0.<small>5</small> seconds while the claw is active.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Lissandra</b> consumes the claw and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to its current location.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Lissandra_Frozen_Tomb.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lissandra</b> can cast <i>Frozen Tomb</i> on herself or a target enemy champion.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Enemy Cast:</b></span> <b>Lissandra</b> freezes the target enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Self Cast:</b></span> <b>Lissandra</b> instantly entombs herself, placing herself in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> for 2.<small>5</small> seconds while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself every 0.<small>25</small> seconds over the duration, which is increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="missing health" data-displayformula="1% per 1% of \'\'\'missing\'\'\' health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on <b>missing</b> health)</span></span> at time of cast.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: '25 seconds over the duration, which is increased by 0% − 100% (based on missing health) at time of cast',
        healType: 'BonusHealth',
        values: 25,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'at time of cast',
        pre: '25 seconds over the duration, which is increased by 0% − 100%',
        post: 'at time of cast',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'based on missing health',
            pre: 'based on missing health',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Heal per Tick:',
        raw: '9 / 14 / 19 (+ 2.5% AP)',
        values: [9, 14, 19],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '9 / 14 / 19',
        children: [
          {
            values: 2.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 2.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Heal per Tick:',
        raw: '18 / 28 / 38 (+ 5 AP)',
        values: [18, 28, 38],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '18 / 28 / 38',
        children: [
          {
            values: 5,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Total Heal:',
        raw: '90 / 140 / 190 (+ 25% AP)',
        values: [90, 140, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 140 / 190',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Heal:',
        raw: '180 / 280 / 380 (+ 50% AP)',
        values: [180, 280, 380],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '180 / 280 / 380',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Frozen Tomb</i> creates a field of ice that spreads out from the target over 1.<small>5</small> seconds and covers the surrounding area for 3 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 0.<small>5</small> seconds, refreshing every 0.<small>25</small> seconds while they remain.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 75% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 52.5 / 75%',
        values: [30, 52.5, 75],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 52.5 / 75%',
      },
    ],
  },
];
export const Lissandra = { I, Q, W, E, R };
