import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Zyra';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Zyra_Garden_of_Thorns.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Zyra</b> spawns one or two <span style="color: #56C456; white-space:normal">Seeds</span> nearby that last for 30 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over the surrounding area for 1 second.',
    leveling: [],
  },
  {
    description:
      'After 1 second, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can destroy Seeds by stepping on them.',
    leveling: [],
  },
  {
    description:
      '<b>Zyra</b> can only have a total of 8 <i>Seeds</i> planted at a time, preserving <span style="color: #AF1AAF; white-space:normal">Seeds</span> spawned by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Rampant Growth" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Rampant_Growth" title="Rampant Growth"><img alt="Rampant Growth" src="/wiki/images/Zyra_Rampant_Growth.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Rampant_Growth" title="Zyra/LoL">Rampant Growth</a></span></span></i> over <span style="color: #56C456; white-space:normal">Seeds</span> spawned by <i>Garden of Thorns</i>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Zyra_Deadly_Spines.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> sprouts thorny spines at the target location that appear after a 0.<small>625</small>-seconds delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
        values: [60, 95, 130, 165, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 95 / 130 / 165 / 200',
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
      'If <i>Deadly Spine</i> hits a <span style="color: #56C456; white-space:normal">Seed</span>, it sprouts into a <a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL#Pets"><img alt="Zyra Deadly Spines Render.png" src="/wiki/images/Zyra_Deadly_Spines_Render.png" decoding="async" loading="lazy" width="20" height="25" class="lazyload"></a> <i><a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL">Thorn Spitter</a></i> that remains for 8 seconds.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Zyra_Rampant_Growth.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> plants a <span style="color: #883FD1; white-space:normal">Seed</span> at the target location that remains for 60 seconds and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over the surrounding area, though decreasing in radius after 1 second. After 1.<small>5</small> seconds, enemy champions can destroy the <span style="color: #AF1AAF; white-space:normal">Seed</span> by stepping on it, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> them for 2 seconds.',
    leveling: [],
  },
  {
    description:
      '<b>Zyra</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Seed</i> charge, up to a maximum of 2. Killing an enemy generates 20% charge toward a <i>Seed</i>, increased to 100% for large enemies and whenever scoring an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Zyra_Grasping_Roots.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> shoots a surge of vines in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 50% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
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
        name: 'Root Duration:',
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
      'If <i>Grasping Roots</i> hits a <span style="color: #56C456; white-space:normal">Seed</span>, it sprouts into a <a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL#Pets"><img alt="Zyra Grasping Roots Render.png" src="/wiki/images/Zyra_Grasping_Roots_Render.png" decoding="async" loading="lazy" width="20" height="32" class="lazyload"></a> <i><a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL">Vine Lasher</a></i>, which remains on the battlefield for 8 seconds.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Zyra_Stranglethorns.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> summons a monstrous thicket at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit as it expands.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '180 / 265 / 350 (+ 70% AP)',
        values: [180, 265, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '180 / 265 / 350',
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
    ],
  },
  {
    description:
      'After 2 seconds, the thicket snaps upward to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> enemies within for 1 second.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Plants"><img alt="Plants" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Plants</a></span></span></i> hit by the thicket become enraged, restoring <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50% of their <b>current</b> health</span></span>, increasing their <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health by 50%</span></span>, gaining 25% increased <a href="/wiki/Size" title="Size">size</a> and refreshing their duration while the thicket expands. Additionally they attack in a flurry, launching two shots per attack, dealing <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;150% damage per flurry.&nbsp;」</span><span class="flipText2">「&nbsp;75% damage per shot.&nbsp;」</span></span>',
    leveling: [],
  },
];
export const Zyra = { I, Q, W, E, R };
