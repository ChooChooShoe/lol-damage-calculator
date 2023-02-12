import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Twisted Fate';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Twisted_Fate_Loaded_Dice.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Twisted Fate</b> kills an enemy, he generates <span class="inline-image" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="Gold"><img alt="Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span></span><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FFD700;" data-top_label="probability" data-bot_values="1;2;3;4;5;6" data-top_values="13.33;13.33;13.33;13.33;13.33;33.33" data-top_key="%">1 − 6 (based on probability)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: ' Whenever Twisted Fate kills an enemy, he generates 1 − 6 (based on probability)',
        values: [1, 6],
        user: 'none',
        units: '',
        unitsText: 'Twisted Fate kills an enemy, he generates 1',
        pre: 'Whenever Twisted Fate kills an enemy, he generates 1 − 6',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_ap',
            unitsText: 'based on probability',
            pre: 'based on probability',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Since his dice are loaded, <b>Twisted Fate</b> has an increased chance of gaining <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="6 Gold"><img alt="6 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">6</span></span>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Twisted_Fate_Wild_Cards.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Twisted Fate</b> throws a fan of three cards in a cone in the target direction that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 80% AP)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
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
    ],
  },
  {
    description: '<i>Enemies can be damaged only once per pass.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Twisted_Fate_Pick_a_Card.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Twisted Fate</b> cycles through three cards for 6 seconds, hovering each for 0.<small>5</small> seconds at a time. <i>Pick a Card</i> can be recast within the duration, which selects the current card hovered.',
    leveling: [],
  },
  {
    img: '/wiki/images/Twisted_Fate_Pick_a_Card.gif',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Twisted Fate</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to have a 0.<small>25</small>-second cast time, deal <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span>, and apply an additional effect based on the card selected, though not being able to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Twisted_Fate_Blue_Card.png',
    description:
      '<span class="template_sbc"><b>Blue Card Bonus:</b></span> Restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '40 / 60 / 80 / 100 / 120 (+ 100% AD) (+ 115% AP)',
        values: [40, 60, 80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80 / 100 / 120',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
          {
            values: 115,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 115% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Mana Restored:',
        raw: '50 / 75 / 100 / 125 / 150',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
      },
    ],
  },
  {
    img: '/wiki/images/Twisted_Fate_Red_Card.png',
    description:
      '<span class="template_sbc"><b>Red Card Bonus:</b></span> Deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target and surrounding enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 100% AD) (+ 70% AP)',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60 / 75 / 90',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
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
    img: '/wiki/images/Twisted_Fate_Gold_Card.png',
    description:
      '<span class="template_sbc"><b>Gold Card Bonus:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">Stuns</a></span> the target for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 100% AD) (+ 50% AP)',
        values: [15, 22.5, 30, 37.5, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 22.5 / 30 / 37.5 / 45',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
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
    description:
      '<i>Pick a Card\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Twisted_Fate_Stacked_Deck.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Twisted Fate</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>. His basic attacks generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Stacked Deck</i>, stacking up to 3 times.<br><br> At 3 stacks, his next basic attack is empowered to consume them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '10 / 17.5 / 25 / 32.5 / 40%',
        values: [10, 17.5, 25, 32.5, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 17.5 / 25 / 32.5 / 40%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '65 / 90 / 115 / 140 / 165 (+ 50% AP)',
        values: [65, 90, 115, 140, 165],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 90 / 115 / 140 / 165',
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
const R: SubSkill[] = [
  {
    img: '/wiki/images/Twisted_Fate_Destiny.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Twisted Fate</b> marks all targetable enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for a duration. <i>Destiny</i> can be recast after 0.<small>5</small> seconds within the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Duration:',
        raw: '6 / 8 / 10',
        values: [6, 8, 10],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 8 / 10',
      },
    ],
  },
  {
    img: '/wiki/images/Twisted_Fate_Gate.png',
    description:
      '<span class="template_sbc"><b>Recast - Gate:</b></span> <b>Twisted Fate</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds before <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span> to the target location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroying</a></span> all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> targeting him in the process.',
    leveling: [],
  },
];
export const TwistedFate = { I, Q, W, E, R };
