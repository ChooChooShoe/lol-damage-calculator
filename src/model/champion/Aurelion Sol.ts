import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Aurelion Sol';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Aurelion_Sol_Cosmic_Creator.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Aurelion Sol\'s</b> damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against enemies grant him stacks of <span style="color: #5C58C9; white-space:normal">Stardust</span>, which improve each of his abilities. The amount of <span style="color: #5C58C9; white-space:normal">Stardust</span> collected by each ability may vary by target.\n',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Aurelion_Sol_Breath_of_Light.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 3.<small>25</small> seconds to exhale a beam of starfire, during which he can steer the beam in the target direction. The beam collides with the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them, and deals them <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>125</small> seconds, reduced to 50% for other surrounding enemies hit by the beam.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '3.75 − 11.25 (based on level) (+ 1.875 / 3.125 / 4.375 / 5.625 / 6.875) (+ 7.5% AP)',
        values: [
          3.75, 4.19, 4.63, 5.07, 5.51, 5.96, 6.4, 6.84, 7.28, 7.72, 8.16, 8.6,
          9.04, 9.49, 9.93, 10.37, 10.81, 11.25,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3.75 − 11.25',
        children: [
          {
            values: [1.875, 3.125, 4.375, 5.625, 6.875],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 1.875 / 3.125 / 4.375 / 5.625 / 6.875',
          },
          {
            values: 7.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 7.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage per Tick:',
        raw: '1.88 − 5.63 (based on level) (+ 0.9375 / 1.5625 / 2.1875 / 2.8125 / 3.4375) (+ 3.75% AP)',
        values: [
          1.88, 2.1, 2.32, 2.54, 2.76, 2.98, 3.2, 3.42, 3.64, 3.87, 4.09, 4.31,
          4.53, 4.75, 4.97, 5.19, 5.41, 5.63,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.88 − 5.63',
        children: [
          {
            values: [0.9375, 1.5625, 2.1875, 2.8125, 3.4375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 0.9375 / 1.5625 / 2.1875 / 2.8125 / 3.4375',
          },
          {
            values: 3.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 3.75% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Breath of Light</i> can be recast within the duration, and does so automatically afterwards.',
    leveling: [],
  },
  {
    description:
      'For each second that the beam continuously damages the same enemy, it bursts to deal <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span></span> and grants <span style="color: #5C58C9; white-space:normal">1 Stardust</span> if the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. The damage based on the target\'s health ratio is capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "20 − 40 (based on level) (+ 40 / 50 / 60 / 70 / 80) (+ 40% AP) (+ (0.031% Stardust stacks) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [
          20, 21.18, 22.35, 23.53, 24.71, 25.88, 27.06, 28.24, 29.41, 30.59,
          31.76, 32.94, 34.12, 35.29, 36.47, 37.65, 38.82, 40,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+',
        pre: '20 − 40',
        post: '+',
        children: [
          {
            values: [40, 50, 60, 70, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 40 / 50 / 60 / 70 / 80',
          },
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: 0.031,
            valuesIsPercent: true,
            user: 'player',
            units: 'feastStacks',
            unitsText: 'Stardust stacks',
            pre: '0.031% Stardust stacks',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Aurelion Sol</b> ends <i>Breath of Light</i> early.',
    leveling: [],
  },
  {
    description:
      'At rank 5, <i>Breath of Light\'s</i> channel duration lasts for as long as <b>Aurelion Sol</b> can pay its <span style="color: #0099CC; white-space:normal">mana</span> cost.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Aurelion_Sol_Astral_Flight.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction and resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light\'s"><img alt="Breath of Light\'s" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>. While in flight, he has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light"><img alt="Breath of Light" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light</a></span></span></i> has no cooldown and maximum channel duration and its flat damage is increased, but <i>Astral Flight\'s</i> dash speed is reduced by 50% during its channel.',
    leveling: [
      {
        effectType: 'Unique',
        name: ' Breath of Light Flat Damage Modifier:',
        raw: '114 / 115.5 / 117 / 118.5 / 120%',
        values: [114, 115.5, 117, 118.5, 120],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '114 / 115.5 / 117 / 118.5 / 120%',
      },
    ],
  },
  {
    description:
      '<i><b>Aurelion Sol</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> crowd control during the dash.</i>',
    leveling: [],
  },
  {
    description:
      '<i>Astral Flight</i> can be recast after 0.<small>5</small> seconds during the dash, and does so automatically after reaching the destination.',
    leveling: [],
  },
  {
    img: '/wiki/images/Aurelion_Sol_Astral_Flight_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Aurelion Sol</b> ends <i>Astral Flight</i> early.',
    leveling: [],
  },
  {
    description:
      'Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them reduces <i>Astral Flight\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 90% of its <b>total</b> cooldown.',
    leveling: [],
  },
  {
    description:
      '<i><b>Aurelion Sol</b> will not dash if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> during the cast time. He can cast any of his abilities during the dash. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Breath of Light" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Breath of Light\'s"><img alt="Breath of Light\'s" src="/wiki/images/Aurelion_Sol_Breath_of_Light.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Breath_of_Light" title="Aurelion Sol/LoL">Breath of Light\'s</a></span></span> channel will be interrupted if Astral Flight ends or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Singularity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Singularity"><img alt="Singularity" src="/wiki/images/Aurelion_Sol_Singularity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Aurelion Sol/LoL">Singularity</a></span></span> is cast during the flight, but the ability will automatically be cast afterwards. Astral Flight will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Aurelion_Sol_Singularity.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> blasts the target location, conjuring a black hole after a 0.<small>5</small>-second delay that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area, lasts for 5 seconds, and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to enemies within the area.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '2.5 / 3.75 / 5 / 6.25 / 7.5 (+ 6.25% AP)',
        values: [2.5, 3.75, 5, 6.25, 7.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2.5 / 3.75 / 5 / 6.25 / 7.5',
        children: [
          {
            values: 6.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 6.25% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 125% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 125% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies in the black hole are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">dragged</a></span> toward its center over the duration. Non-epic monster targets within the center that are below <span style="color: #1F995C; white-space:normal">5% <span style="color: #5C58C9; white-space:normal">(+&nbsp;2.<small>6</small>% Stardust stacks)</span> of their <b>maximum</b> health</span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span>. Additionally, non-champions affected have their <span style="color: #F5EE99; white-space:normal">movement speed</span> <b>reduced</b> to <span style="color: #F5EE99; white-space:normal">0</span>.',
    leveling: [],
  },
  {
    description:
      'After <i>Singularity</i> ends, <b>Aurelion Sol</b> is granted <span style="color: #5C58C9; white-space:normal">1 Stardust</span> for each continuous second that enemy champions were inside it, and a varying amount of <span style="color: #5C58C9; white-space:normal">Stardust</span> for enemies that died while within the area:\n',
    leveling: [],
  },
];
const R1: SubSkill[] = [
  {
    img: '/wiki/images/Aurelion_Sol_Falling_Star.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> calls down a star to impact the target location after 1.<small>25</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>25</small> seconds. <i>Falling Star</i> grants <span style="color: #5C58C9; white-space:normal">5 Stardust</span> for each enemy champion hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 65% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Once <i>Falling Star</i> has been learned, gathering <span style="color: #5C58C9; white-space:normal">75 Stardust</span> causes the next cast of <i>Falling Star</i> to transform into <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="The Skies Descend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="The Skies Descend"><img alt="The Skies Descend" src="/wiki/images/Aurelion_Sol_The_Skies_Descend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#The_Skies_Descend" title="Aurelion Sol/LoL">The Skies Descend</a></span></span></i> instead, empowering the impact with new effects.',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Aurelion_Sol_The_Skies_Descend.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aurelion Sol</b> summons an enormous star to impact the target location after 2 seconds, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">25% increased damage</span>, exploding in a larger radius, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> enemies hit for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Empowered Magic Damage:',
        raw: '187.5 / 312.5 / 437.5 (+ 81.25% AP)',
        values: [187.5, 312.5, 437.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '187.5 / 312.5 / 437.5',
        children: [
          {
            values: 81.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 81.25% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/The_Skies_Descend_Minimap.png',
    description:
      'Upon impact, a massive shockwave is unleashed which rapidly expands outward from the impact location over 3 seconds, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #00B0F0; white-space:normal">magic damage</span></span> to enemy champions and epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> all enemies hit by 50% for 1 second and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 60% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
];
export const AurelionSol = { I, Q, W, E, R1, R2 };
