import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Brand';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Brand\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Ablaze</i> to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Subsequent abilities used against a target with <i>Ablaze</i> are empowered. Killing an enemy afflicted with <i>Ablaze</i> or with an ability restores <span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="20;23.33;26.67;30;33.33;36.67;40" data-top_values="1;3;6;9;12;15;18">20 − 40 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: ' Killing an enemy afflicted with Ablaze or with an ability restores 20 − 40 (based on level)  mana',
        values: [
          20, 21.18, 22.35, 23.53, 24.71, 25.88, 27.06, 28.24, 29.41, 30.59,
          31.76, 32.94, 34.12, 35.29, 36.47, 37.65, 38.82, 40,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'mana',
        pre: 'Killing an enemy afflicted with Ablaze or with an ability restores 20 − 40',
        post: 'mana',
      },
    ],
  },
  {
    img: '/wiki/images/Brand_Blaze.png',
    description:
      '<span class="template_sbc"><b>Ablaze:</b></span> While afflicted with <i>Ablaze</i>, the target is dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal">2.<small>5</small>% of their <b>maximum</b> health</span> over 3.<small>25</small> seconds.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal">0.<small>8<span style="text-decoration: overline;">3</span></small>% of their <b>maximum</b> health</span> every 1.<small>08<span style="text-decoration: overline;">3</span></small> seconds over 3.<small>25</small> seconds.&nbsp;」</span></span><i>Ablaze</i> deals 120% damage per tick to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, capped at 80.',
    leveling: [],
  },
  {
    img: '/wiki/images/Brand_Blaze_2.png',
    description:
      'Upon applying 3 stacks of <i>Ablaze</i> to a large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the fire becomes unstable, forming an area around the target that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> and explodes after 2 seconds, consuming all stacks. All enemies within the detonation are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;1" data-finish="13;17" data-bot_values="9;9.25;9.5;9.75;10;10.25;10.5;10.75;11;11.25;11.5;11.75;12;12.25;12.5;12.75;13" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17" data-bot_key="%">9% − 13% (based on level)</span> of their <b>maximum</b> health</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> and applied a stack of <i>Ablaze</i>. <i>The explosion will still occur if the target dies to the ability applying the third stack or during the delay.</i>',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' All enemies within the detonation are dealt magic damage equal to 9% − 13% (based on level) of their maximum health (+ 2% per 100 AP) and applied a stack of Ablaze',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of their maximum health',
        pre: 'All enemies within the detonation are dealt magic damage equal to 9% − 13%',
        post: 'of their maximum health',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Brand</b> cannot stack <i>Ablaze</i> more than once on enemies who have exploded in the last 4 seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Brand_Sear.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Brand</b> launches a fireball in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 55% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Brand_Pillar_of_Flame.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> After a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.625 seconds, but rounded up to the next game tick.">0.<small>627</small> seconds</span> delay, <b>Brand</b> erupts a pillar of flame at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 120 / 165 / 210 / 255 (+ 60% AP)',
        values: [75, 120, 165, 210, 255],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 120 / 165 / 210 / 255',
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
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> The target takes 25% increased damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '93.75 / 150 / 206.25 / 262.5 / 318.75 (+ 75% AP)',
        values: [93.75, 150, 206.25, 262.5, 318.75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '93.75 / 150 / 206.25 / 262.5 / 318.75',
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
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Brand_Conflagration.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Brand</b> sets the target enemy aflame, which creates a blast that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to them and nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 95 / 120 / 145 / 170 (+ 45% AP)',
        values: [70, 95, 120, 145, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 95 / 120 / 145 / 170',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> <i>Conflagration\'s</i> spread range is doubled.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Brand_Pyroclasm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Brand</b> launches a fireball at the target enemy that bounces between nearby enemies and <b>Brand</b> up to four times, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies each time.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 200 / 300 (+ 25% AP)',
        values: [100, 200, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 200 / 300',
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
        name: 'Total Single-Target Damage:',
        raw: '300 / 600 / 900 (+ 75% AP)',
        values: [300, 600, 900],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 600 / 900',
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
    ],
  },
  {
    description:
      '<i>Pyroclasm prioritizes </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="ablazed"><img alt="ablazed" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">ablazed</a></span></span><i> enemy champions, then other enemy champions, then any valid bounce target, then <b>Brand</b>.</i>',
    leveling: [],
  },
  {
    description:
      '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> for the fireball to bounce to them.</i>',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Ablaze"><img alt="Ablaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Ablaze</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 0.<small>25</small> seconds. This can affect the same enemy more than once.',
    leveling: [],
  },
];
export const Brand = { I, Q, W, E, R };
