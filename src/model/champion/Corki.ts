import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Corki';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Corki_Hextech_Munitions.png',
    description:
      '<span class="template_sbc"><b>Innate - Hextech Shrapnel Shells:</b></span> <b>Corki\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are modified to deal <span style="color:orange; white-space:normal">80% AD</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span style="color:orange; white-space:normal">20% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Corki_The_Package.png',
    description:
      '<span class="template_sbc"><b>Innate - The Package:</b></span> After <span class="template_sbc"><b>10:00</b></span>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="The Package" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#The_Package" title="The Package"><img alt="The Package" src="/wiki/images/Corki_The_Package.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#The_Package" title="Corki/LoL">The Package</a></span></span></i> is delivered to both corners of the allied <a href="/wiki/Spawn" title="Spawn">fountain</a>, which can be selected by <b>Corki</b> to pick up after <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> for 1 second. Upon completion of the channel, <b>Corki</b> gains one cast of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Special Delivery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Special_Delivery" title="Special Delivery"><img alt="Special Delivery" src="/wiki/images/Corki_Special_Delivery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Special_Delivery" title="Corki/LoL">Special Delivery</a></span></span> for 60 seconds, replacing <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Valkyrie" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Valkyrie" title="Valkyrie"><img alt="Valkyrie" src="/wiki/images/Corki_Valkyrie.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Valkyrie" title="Corki/LoL">Valkyrie</a></span></span> for the duration. While holding the <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="The Package" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#The_Package" title="The Package"><img alt="The Package" src="/wiki/images/Corki_The_Package.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#The_Package" title="Corki/LoL">The Package</a></span></span></i>, <b>Corki</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghost"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i><b>Corki</b> cannot start the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> to pick up the package while he is unable to cast abilities.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Corki_Phosphorus_Bomb.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> launches a bomb at the target location that explodes upon impact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 120 / 165 / 210 / 255 (+ 70% bonus AD) (+ 50% AP)',
        values: [75, 120, 165, 210, 255],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 120 / 165 / 210 / 255',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 70% bonus AD',
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
    ],
  },
  {
    description:
      'The bomb also grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 6 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit for the same duration.',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Corki_Valkyrie.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled. Each patch lasts 2.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      'Enemies within the patches are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 10% AP)',
        values: [15, 22.5, 30, 37.5, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 22.5 / 30 / 37.5 / 45',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '150 / 225 / 300 / 375 / 450 (+ 100% AP)',
        values: [150, 225, 300, 375, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 225 / 300 / 375 / 450',
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
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Gatling Gun" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Gatling_Gun" title="Gatling Gun"><img alt="Gatling Gun" src="/wiki/images/Corki_Gatling_Gun.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Gatling_Gun" title="Corki/LoL">Gatling Gun</a></span></span> can be cast during the dash. Valkyrie will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Corki_Special_Delivery.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> all enemies in his path 500 units and leaving behind a trail of fire for 5 seconds, which grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for its duration and for 3 seconds afterwards.',
    leveling: [],
  },
  {
    description:
      'Enemies hit by <b>Corki\'s</b> dash or within the trail are burned and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90% for 2 seconds, refreshing every 0.<small>25</small> seconds while inside the area. The burn deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="static 7.5 until lvl 7; then+1.25 until lvl 15, then+2.5" data-bot_values="7.5;7.5;7.5;7.5;7.5;7.5;7.5;8.75;10;11.25;12.5;13.75;15;16.25;17.5;20;22.5;25" data-top_values="">7.<small>5</small> − 25 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 4:',
        raw: '5 − 25 (based on level) (+ 50% bonus AD) (+ 6% AP) magic damage every 0',
        damagetype: 'Magic',
        values: [
          5, 6.18, 7.35, 8.53, 9.71, 10.88, 12.06, 13.24, 14.41, 15.59, 16.76,
          17.94, 19.12, 20.29, 21.47, 22.65, 23.82, 25,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage every 0',
        pre: '5 − 25',
        post: 'magic damage every 0',
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
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 6% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Casting <i>Special Delivery</i> instantly resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Valkyrie" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Valkyrie" title="Valkyrie\'s"><img alt="Valkyrie\'s" src="/wiki/images/Corki_Valkyrie.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Valkyrie" title="Corki/LoL">Valkyrie\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<i>Special Delivery will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Corki_Gatling_Gun.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts <span style="color: #FF8C34; white-space:normal">physical</span> and <span style="color: #00B0F0; white-space:normal">magic</span> damage every 0.<small>25</small> seconds to all enemies hit as well as reducing their <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and <a href="/wiki/Stack" title="Stack">stacking</a> up to 8 times.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mixed Damage Per Tick:',
        raw: '7.5 / 10.625 / 13.75 / 16.875 / 20 (+ 15% bonus AD)',
        values: [7.5, 10.625, 13.75, 16.875, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.5 / 10.625 / 13.75 / 16.875 / 20',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 15% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Tick:',
        raw: '3.75 / 5.3125 / 6.875 / 8.4375 / 10 (+ 7.5% bonus AD)',
        values: [3.75, 5.3125, 6.875, 8.4375, 10],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3.75 / 5.3125 / 6.875 / 8.4375 / 10',
        children: [
          {
            values: 7.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 7.5% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '3.75 / 5.3125 / 6.875 / 8.4375 / 10 (+ 7.5% bonus AD)',
        values: [3.75, 5.3125, 6.875, 8.4375, 10],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3.75 / 5.3125 / 6.875 / 8.4375 / 10',
        children: [
          {
            values: 7.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 7.5% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Mixed Damage:',
        raw: '120 / 170 / 220 / 270 / 320 (+ 240% bonus AD)',
        values: [120, 170, 220, 270, 320],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 170 / 220 / 270 / 320',
        children: [
          {
            values: 240,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 240% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Resistance Reduction Per Tick:',
        raw: '1 / 1.375 / 1.75 / 2.125 / 2.5',
        values: [1, 1.375, 1.75, 2.125, 2.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.375 / 1.75 / 2.125 / 2.5',
      },
      {
        effectType: 'Unique',
        name: 'Total Resistance Reduction:',
        raw: '8 / 11 / 14 / 17 / 20',
        values: [8, 11, 14, 17, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 11 / 14 / 17 / 20',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Corki_Missile_Barrage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> fires a missile in the target direction that explodes upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 115 / 150 (+ 15 / 45 / 75% AD) (+ 12% AP)',
        values: [80, 115, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 115 / 150',
        children: [
          {
            values: [15, 45, 75],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 15 / 45 / 75% AD',
          },
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Corki</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Missile Barrage</i> charge, up to a maximum of 7. He gains maximum charges upon <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Corki_Big_One.png',
    description:
      'Every third missile <b>Corki</b> fires is a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Big One" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Big_One" title="Big One"><img alt="Big One" src="/wiki/images/Corki_Big_One.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Big_One" title="Corki/LoL">Big One</a></span></span></i>, dealing 100% increased damage as well as gaining increased range and explosion radius.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Big One Magic Damage:',
        raw: '160 / 230 / 300 (+ 30 / 90 / 150% AD) (+ 24% AP)',
        values: [160, 230, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '160 / 230 / 300',
        children: [
          {
            values: [30, 90, 150],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 30 / 90 / 150% AD',
          },
          {
            values: 24,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 24% AP',
          },
        ],
      },
    ],
  },
];
export const Corki = { I, Q, W1, W2, E, R };
