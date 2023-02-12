import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Tryndamere';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Tryndamere_Battle_Fury.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Tryndamere</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">5 Fury</span></a></span> on his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, and <span style="color: #FA6533; white-space:normal">10 Fury</span> on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> and each time he kills an enemy. After 8 seconds without dealing or taking damage, <b>Tryndamere</b> loses <span style="color: #FA6533; white-space:normal">5 Fury</span> per second.',
    leveling: [],
  },
  {
    description:
      '<b>Tryndamere</b> gains <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FA6533;" data-top_label="Fury" data-start="0;0" data-finish="40;100" data-bot_values="0;4;8;12;16;20;24;28;32;36;40" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%">0% − 40% (based on Fury)</span> critical strike chance</span></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Tryndamere</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, plus an additional amount based on his <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '10 / 15 / 20 / 25 / 30',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
      },
      {
        effectType: 'Heal',
        name: 'Additional Bonus AD:',
        raw: '0.15 / 0.25 / 0.35 / 0.45 / 0.55 per 1% missing health',
        healType: 'BonusHealth',
        values: [0.15, 0.25, 0.35, 0.45, 0.55],
        valuesIsPercent: true,
        user: 'player',
        units: 'missing_hp',
        unitsText: 'missing healthper 1',
        pre: '0.15 / 0.25 / 0.35 / 0.45 / 0.55 per 1% missing health',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Bonus AD:',
        raw: '25 / 40 / 55 / 70 / 85',
        values: [25, 40, 55, 70, 85],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 40 / 55 / 70 / 85',
      },
    ],
  },
  {
    img: '/wiki/images/Tryndamere_Bloodlust.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> consumes all of his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> himself, increased for every point of <span style="color: #FA6533; white-space:normal">Fury</span> consumed.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Heal:',
        raw: '30 / 40 / 50 / 60 / 70 (+ 30% AP)',
        values: [30, 40, 50, 60, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50 / 60 / 70',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Heal Per 1 Fury:',
        raw: '0.5 / 0.95 / 1.4 / 1.85 / 2.3 (+ 1.2% AP)',
        values: [0.5, 0.95, 1.4, 1.85, 2.3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.5 / 0.95 / 1.4 / 1.85 / 2.3',
        children: [
          {
            values: 1.2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 1.2% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Heal:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 150% AP)',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Tryndamere_Mocking_Shout.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> reduces the <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span> of nearby enemy champions for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Attack Damage Reduction:',
        raw: '20 / 35 / 50 / 65 / 80',
        values: [20, 35, 50, 65, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 35 / 50 / 65 / 80',
      },
    ],
  },
  {
    description:
      'Targets facing in the opposite direction of <b>Tryndamere</b> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for the duration.',
    leveling: [
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
  {
    description:
      '<i>A nearby enemy champion is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be targeted by this ability.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Tryndamere_Spinning_Slash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and generating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">2 Fury</span></a></span> per enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 130% bonus AD) (+ 80% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 130% bonus AD',
          },
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
    ],
  },
  {
    description:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> reduce <i>Spinning Slash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 0.<small>75</small> seconds, doubled to 1.<small>5</small> seconds against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-ability="Bloodlust" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL#Bloodlust" title="Bloodlust"><img alt="Bloodlust" src="/wiki/images/Tryndamere_Bloodlust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL#Bloodlust" title="Tryndamere/LoL">Bloodlust</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-ability="Undying Rage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL#Undying_Rage" title="Undying Rage"><img alt="Undying Rage" src="/wiki/images/Tryndamere_Undying_Rage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL#Undying_Rage" title="Tryndamere/LoL">Undying Rage</a></span></span> can be cast during the dash. Spinning Slash will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Tryndamere_Undying_Rage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tryndamere</b> becomes enraged, instantly gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span> and a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death">minimum health threshold</a></span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Fury Gained:',
        raw: '50 / 75 / 100',
        values: [50, 75, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100',
      },
      {
        effectType: 'Unique',
        name: 'Minimum Health Threshold:',
        raw: '30 / 50 / 70',
        values: [30, 50, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70',
      },
    ],
  },
  {
    description:
      '<i>Undying Rage can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
export const Tryndamere = { I, Q, W, E, R };
