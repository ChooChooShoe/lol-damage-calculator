import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Riven';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Riven_Runic_Blade.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Riven\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Charge</i> for 6 seconds, refreshing on subsequent casts and stacking up to 3 times. <b>Riven\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to each consume a stack to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="30% +&nbsp;6% at level 6, then +&nbsp;6% every 3 levels" data-bot_values="30;36;42;48;54;60" data-top_values="1;6;9;12;15;18" data-bot_key="%">30% − 60% (based on level)</span> AD</span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 2:',
        raw: " Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60% (based on level) AD",
        min: 0,
        max: 10,
        description:
          " Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60% (based on level) AD",
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: "Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% − 60%",
        post: 'AD',
      },
    ],
  },
  {
    description:
      'The <b>bonus</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies lifesteal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Riven_Broken_Wings.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> can activate <i>Broken Wings</i> three times before the ability goes on cooldown, with a 0.<small>3125</small>-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. If <b>Riven</b> does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
    leveling: [],
  },
  {
    description:
      '<b>Riven</b> slashes with her sword for each of the three casts, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies struck within an area, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resetting</a></span> her basic attack timer, and ordering her to basic attack the target of <i>Broken Wings</i> if there are any.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '15 / 35 / 55 / 75 / 95 (+ 45 / 50 / 55 / 60 / 65% AD)',
        values: [15, 35, 55, 75, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 35 / 55 / 75 / 95',
        children: [
          {
            values: [45, 50, 55, 60, 65],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 45 / 50 / 55 / 60 / 65% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '45 / 105 / 165 / 225 / 285 (+ 135 / 150 / 165 / 180 / 195% AD)',
        values: [45, 105, 165, 225, 285],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 105 / 165 / 225 / 285',
        children: [
          {
            values: [135, 150, 165, 180, 195],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 135 / 150 / 165 / 180 / 195% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>First Cast:</b></span> <b>Riven</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> up to 225 units towards the target enemy or in the direction she is currently facing, striking enemies in the target area 100 units away. This cast cannot cross terrain.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Second Cast:</b></span> <b>Riven</b> mimics the first cast\'s effects.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Third Cast:</b></span> <b>Riven</b> mimics the first cast\'s effects in a larger area while also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> enemies hit 75 units over 0.<small>5</small> seconds. This cast can cross terrain.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Riven_Ki_Burst.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> emits a flash of runic energy before the cast time, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '65 / 95 / 125 / 155 / 185 (+ 100% bonus AD)',
        values: [65, 95, 125, 155, 185],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 95 / 125 / 155 / 185',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Riven_Valor.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, though not through terrain, while granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '80 / 105 / 130 / 155 / 180 (+ 110% bonus AD)',
        values: [80, 105, 130, 155, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 105 / 130 / 155 / 180',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 110% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Riven</b> can cast any of her abilities during the dash. Valor will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R1: SubSkill[] = [
  {
    img: '/wiki/images/Riven_Blade_of_the_Exile.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> empowers her blade for 15 seconds, gaining <span style="color:orange; white-space:normal">20% AD</span> <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span>, and increased range on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Broken Wings" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Broken_Wings" title="Broken Wings"><img alt="Broken Wings" src="/wiki/images/Riven_Broken_Wings.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Broken_Wings" title="Riven/LoL">Broken Wings</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Ki Burst" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Ki_Burst" title="Ki Burst"><img alt="Ki Burst" src="/wiki/images/Riven_Ki_Burst.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Ki_Burst" title="Riven/LoL">Ki Burst</a></span></span></i>.<br><br> After 0.<small>5</small> seconds, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Riven" data-ability="Wind Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Riven/LoL#Wind_Slash" title="Wind Slash"><img alt="Wind Slash" src="/wiki/images/Riven_Wind_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Riven/LoL#Wind_Slash" title="Riven/LoL">Wind Slash</a></span></span></i> within the duration.',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Riven_Wind_Slash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Riven</b> unleashes a wave of energy in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="missing health" data-displayformula="2.667% per 1% missing health. \'\'This is capped at 200% bonus damage at 75% missing health.\'\'" data-bot_values="0;25;50;75;100;125;150;175;200" data-top_values="0;9.38;18.75;28.13;37.5;46.88;56.25;65.63;75" data-bot_key="%" data-top_key="%">0% − 200% (based on <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '100 / 150 / 200 (+ 60% bonus AD)',
        values: [100, 150, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '300 / 450 / 600 (+ 180% bonus AD)',
        values: [300, 450, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 450 / 600',
        children: [
          {
            values: 180,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 180% bonus AD',
          },
        ],
      },
    ],
  },
];
export const Riven = { I, Q, W, E, R1, R2 };
