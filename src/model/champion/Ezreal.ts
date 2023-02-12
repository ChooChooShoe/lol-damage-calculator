import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ezreal';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Ezreal</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Rising Spell Force</i> for each enemy hit by his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ezreal_Rising_Spell_Force.png',
    description:
      '<span class="template_sbc"><b>Rising Spell Force:</b></span> For each stack, <b>Ezreal</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">10% <b>bonus</b> attack speed</span></span>, up to a maximum of <span style="color:orangered; white-space:normal">50%</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ezreal_Mystic_Shot.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> fires a bolt of energy in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 45 / 70 / 95 / 120 (+ 130% AD) (+ 15% AP)',
        values: [20, 45, 70, 95, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70 / 95 / 120',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 130% AD',
          },
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Mystic Shot</i> successfully hits an enemy, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of <b>Ezreal\'s</b> abilities, including <i>Mystic Shot\'s</i>, are reduced by 1.<small>5</small> seconds.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Ezreal_Essence_Flux.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> fires an orb in the target direction that marks the first enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, or <a href="/wiki/Structures" class="mw-redirect" title="Structures">structure</a> hit for 4 seconds.',
    leveling: [],
  },
  {
    description:
      'His next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <a href="/wiki/Champion_ability" title="Champion ability">ability</a> against the target detonates the mark to deal them <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 60% bonus AD) (+ 70 / 75 / 80 / 85 / 90% AP)',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
          {
            values: [70, 75, 80, 85, 90],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70 / 75 / 80 / 85 / 90% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the mark was detonated with an ability, <b>Ezreal</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">60 mana</span></span> plus the <span style="color: #0099CC; white-space:normal">mana cost</span> of that ability.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ezreal_Arcane_Shift.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 130 / 180 / 230 / 280 (+ 50% bonus AD) (+ 75% AP)',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50% bonus AD',
          },
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
      '<i>Arcane Shift</i> prioritizes firing at the nearest enemy marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-ability="Essence Flux" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL#Essence_Flux" title="Essence Flux"><img alt="Essence Flux" src="/wiki/images/Ezreal_Essence_Flux.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL#Essence_Flux" title="Ezreal/LoL">Essence Flux</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability. Arcane Shift will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Ezreal_Trueshot_Barrage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> fires an energy projectile in the target direction, which briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '350 / 500 / 650 (+ 100% bonus AD) (+ 90% AP)',
        values: [350, 500, 650],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '350 / 500 / 650',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
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
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> and non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> take 50% reduced damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '175 / 250 / 325 (+ 50% bonus AD) (+ 45% AP)',
        values: [175, 250, 325],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 250 / 325',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50% bonus AD',
          },
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
];
export const Ezreal = { I, Q, W, E, R };
