import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Nautilus';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Nautilus_Staggering_Blow.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Nautilus\' </b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="14;" data-finish="116;" data-bot_values="14;20;26;32;38;44;50;56;62;68;74;80;86;92;98;104;110;116" data-top_values="">14 − 116 (based on level)</span></span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> the target for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.75;1" data-finish="1.5;16" data-bot_values="0.75;1;1.25;1.5" data-top_values="1;6;11;16">0.<small>75</small> − 1.<small>5</small> (based on level)</span> seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Nautilus'  basic attacks are empowered to deal 14 − 116 (based on level) bonus physical damage and  root the target for 0",
        damagetype: 'Physical',
        values: [
          14, 20, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98, 104, 110,
          116,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus physical damage and  root the target for 0',
        pre: "Nautilus'  basic attacks are empowered to deal 14 − 116",
        post: 'bonus physical damage and  root the target for 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '75 − 1',
        values: [75, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 (based on level) seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '5',
        post: 'seconds',
      },
    ],
  },
  {
    description:
      'This effect cannot occur on the same target more than once every few seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Nautilus_Dredge_Line.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> hurls his anchor in the target direction that stops on the first enemy or terrain hit.<br><br>If the anchor hits an enemy, it deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">dragging</a></span> them toward <b>Nautilus</b> while he also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward them within 0.<small>9</small> seconds. Afterwards, the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 0.<small>1</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 115 / 160 / 205 / 250 (+ 90% AP)',
        values: [70, 115, 160, 205, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 115 / 160 / 205 / 250',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
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
      'If the anchor hits terrain, <b>Nautilus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to that location and 50% of <i>Dredge Line\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> are refunded.',
    leveling: [],
  },
  {
    description:
      '<i><b>Nautilus</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while Dredge Line is in flight. He can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Titan\'s Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Titan\'s_Wrath" title="Titan\'s Wrath"><img alt="Titan\'s Wrath" src="/wiki/images/Nautilus_Titan%27s_Wrath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Titan\'s_Wrath" title="Nautilus/LoL">Titan\'s Wrath</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Riptide" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Riptide" title="Riptide"><img alt="Riptide" src="/wiki/images/Nautilus_Riptide.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Riptide" title="Nautilus/LoL">Riptide</a></span></span> during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Nautilus_Titan%27s_Wrath.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 6 seconds, and while it holds, his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to apply <i>Pain of Wrath</i> to the target and surrounding enemies.',
    leveling: [
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
            user: 'player',
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
      '<span class="template_sbc"><b>Pain of Wrath:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> over time, half dealt immediately and the other half dealt after 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '30 / 40 / 50 / 60 / 70 (+ 40% AP)',
        values: [30, 40, 50, 60, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50 / 60 / 70',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Titan\'s Wrath <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Nautilus\' </b> basic attack timer.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Nautilus_Riptide.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> sends three waves of explosions that radiate from him <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">over 0.<small>561</small> seconds</span>. Each wave deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by an amount that decays over 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '55 / 90 / 125 / 160 / 195 (+ 50% AP)',
        values: [55, 90, 125, 160, 195],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 90 / 125 / 160 / 195',
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
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '27.5 / 45 / 62.5 / 80 / 97.5 (+ 25% AP)',
        values: [27.5, 45, 62.5, 80, 97.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '27.5 / 45 / 62.5 / 80 / 97.5',
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
        name: 'Maximum Total Damage:',
        raw: '110 / 180 / 250 / 320 / 390 (+ 100% AP)',
        values: [110, 180, 250, 320, 390],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 180 / 250 / 320 / 390',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
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
    description:
      '<i>Riptide</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Monster Damage:',
        raw: '82.5 / 135 / 187.5 / 240 / 292.5 (+ 75% AP)',
        values: [82.5, 135, 187.5, 240, 292.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '82.5 / 135 / 187.5 / 240 / 292.5',
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
        name: 'Reduced Monster Damage:',
        raw: '41.25 / 67.5 / 93.75 / 120 / 146.25 (+ 37.5% AP)',
        values: [41.25, 67.5, 93.75, 120, 146.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '41.25 / 67.5 / 93.75 / 120 / 146.25',
        children: [
          {
            values: 37.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 37.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Monster Damage:',
        raw: '165 / 270 / 375 / 480 / 585 (+ 150% AP)',
        values: [165, 270, 375, 480, 585],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '165 / 270 / 375 / 480 / 585',
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
const R: SubSkill[] = [
  {
    img: '/wiki/images/Nautilus_Depth_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nautilus</b> sends out a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Depth Charge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Depth_Charge_2" title="Depth Charge"><img alt="Depth Charge" src="/wiki/images/Nautilus_Depth_Charge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Depth_Charge_2" title="Nautilus/LoL">Depth Charge</a></span></span></i> that chases the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, accelerating over time and creating eruptions every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> in its wake that also briefly grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. Enemies hit by the eruptions are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '125 / 175 / 225 (+ 40% AP)',
        values: [125, 175, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 175 / 225',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Stun Duration:',
        raw: '1 / 1.5 / 2',
        values: [1, 1.5, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.5 / 2',
      },
    ],
  },
  {
    img: '/wiki/images/Nautilus_Depth_Charge_2.png',
    description:
      'Upon reaching the primary target or when it moves too far away, the <i>Depth Charge</i> erupts a final time. The primary target takes increased damage, is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for a modified duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '150 / 275 / 400 (+ 80% AP)',
        values: [150, 275, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 275 / 400',
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
        name: 'Knock Up Duration:',
        raw: '1 / 1.5 / 2',
        values: [1, 1.5, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.5 / 2',
      },
    ],
  },
];
export const Nautilus = { I, Q, W, E, R };
