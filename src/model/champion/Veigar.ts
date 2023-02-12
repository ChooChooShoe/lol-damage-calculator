import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Veigar';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Veigar</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Phenomenal Evil</i> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, and 5 stacks whenever he scores an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Veigar_Phenomenal_Evil_Power.png',
    description:
      '<span class="template_sbc"><b>Phenomenal Evil:</b></span> For each stack, <b>Veigar</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">1 ability power</span></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Veigar_Baleful_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> blasts a dark bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first two enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
      'If this kills an enemy, it generates 1 stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Phenomenal Evil Power" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Phenomenal Evil"><img alt="Phenomenal Evil" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Veigar/LoL">Phenomenal Evil</a></span></span></i>, tripled against large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Veigar_Dark_Matter.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> casts down a mass of dark matter that strikes the target location after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1.2 seconds, but rounded up to the next game tick.">1.<small>221</small> seconds</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="from the start of the cast time">delay</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 150 / 200 / 250 / 300 (+ 100% AP)',
        values: [100, 150, 200, 250, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200 / 250 / 300',
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
    ],
  },
  {
    description:
      '<i>Dark Matter\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced based on stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Phenomenal Evil Power" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Phenomenal Evil"><img alt="Phenomenal Evil" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Veigar/LoL">Phenomenal Evil</a></span></span></i>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Veigar_Event_Horizon.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> forms a cage at the target location that erects after a 0.<small>5</small> second delay, remaining there for 3 seconds. Enemies that collide with the edges of the cage are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Stun Duration:',
        raw: '1.5 / 1.75 / 2 / 2.25 / 2.5',
        values: [1.5, 1.75, 2, 2.25, 2.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.5 / 1.75 / 2 / 2.25 / 2.5',
      },
    ],
  },
  {
    description:
      "Enemies can be affected by <i>Event Horizon's</i> effects only once per cast.",
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Veigar_Primordial_Burst.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> sends a primordial burst at the target enemy champion that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1.5% per 1% of target\'s \'\'\'missing\'\'\' health. \'\'This is capped at 66.66% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;6.67;13.33;20;26.67;33.33;40;46.67;53.33;60;66.67" data-bot_key="%" data-top_key="%">0% − 100% (based on target\'s <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '175 / 250 / 325 (+ 75% AP)',
        values: [175, 250, 325],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 250 / 325',
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
        name: 'Maximum Magic Damage:',
        raw: '350 / 500 / 650 (+ 150% AP)',
        values: [350, 500, 650],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '350 / 500 / 650',
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
export const Veigar = { I, Q, W, E, R };
