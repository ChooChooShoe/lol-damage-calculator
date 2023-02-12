import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Amumu';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Amumu_Cursed_Touch.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Amumu\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Curse of the Sad Mummy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Curse of the Sad Mummy"><img alt="Curse of the Sad Mummy" src="/wiki/images/Amumu_Curse_of_the_Sad_Mummy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Curse_of_the_Sad_Mummy" title="Amumu/LoL">Curse of the Sad Mummy</a></span></span></i> are empowered to mark enemies with <i>Curse</i> for 3 seconds, refreshing on subsequent applications and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Despair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Despair" title="Despair\'s"><img alt="Despair\'s" src="/wiki/images/Amumu_Despair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Despair" title="Amumu/LoL">Despair\'s</a></span></span></i> per-tick damage.',
    leveling: [],
  },
  {
    description:
      '<i>Cursed</i> targets receive <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">10% <b>bonus</b> true damage</span></span> from all incoming <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Amumu_Bandage_Toss.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Amumu</b> throws a bandage in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pulling</a></span> him to them, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 95 / 120 / 145 / 170 (+ 85% AP)',
        values: [70, 95, 120, 145, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 95 / 120 / 145 / 170',
        children: [
          {
            values: 85,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 85% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Amumu</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Bandage Toss</i> charge, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Despair" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Despair" title="Despair"><img alt="Despair" src="/wiki/images/Amumu_Despair.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Despair" title="Amumu/LoL">Despair</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Amumu_Despair.png',
    description:
      '<span class="template_sbc"><b>Toggle:</b></span> <b>Amumu</b> cries a continuous pool of tears, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage Per Tick:',
        raw: "6 / 8 / 10 / 12 / 14 (+ 1 / 1.25 / 1.5 / 1.75 / 2% (+ 0.25% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [6, 8, 10, 12, 14],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 8 / 10 / 12 / 14',
        children: [
          {
            values: [1, 1.25, 1.5, 1.75, 2],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 1 / 1.25 / 1.5 / 1.75 / 2%',
            post: "of target's maximum health",
            children: [
              {
                values: 0.25,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.25% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Amumu</b> reduces every instance of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> taken, capped at 50% of the damage instance.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage Reduction:',
        raw: '5 / 7 / 9 / 11 / 13 (+ 3% bonus armor) (+ 3% bonus magic resistance)',
        values: [5, 7, 9, 11, 13],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 7 / 9 / 11 / 13',
        children: [
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 3% bonus armor',
          },
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 3% bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Amumu_Tantrum.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Amumu</b> releases his anger, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '65 / 100 / 135 / 170 / 205 (+ 50% AP)',
        values: [65, 100, 135, 170, 205],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 100 / 135 / 170 / 205',
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
      '<i>Tantrum\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>75</small> seconds whenever <b>Amumu</b> is hit by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Amumu_Curse_of_the_Sad_Mummy.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Amumu</b> entangles nearby enemies in bandages, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 300 / 400 (+ 80% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
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
];
export const Amumu = { I, Q, W, E, R };
