import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Nunu & Willump';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Nunu_Call_of_the_Freljord.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> When <b>Nunu</b> and <b>Willump</b> deal damage against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structure</a></span>, they and a nearby allied champion gain <i>Call of the Freljord</i> for 4 seconds, prioritizing the ally with <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>highest</b> attack speed</span></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Call of the Freljord:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">20% <b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>. <b>Willump\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> additionally deal <span style="color:orange; white-space:normal">30% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to secondary targets in a cone in front of him.',
    leveling: [],
  },
  {
    description:
      '<b>Nunu</b> and <b>Willump</b> cannot trigger <i>Call of the Freljord</i> from the same enemy again for a time. Successive triggers of <i>Call of the Freljord</i> while it is active will extend the duration by 4 seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Nunu_Consume.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Willump</b> takes a bite out of the target enemy, dealing damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself. The heal is increased by 50% while he is <span style="color: #1F995C; white-space:normal">below 50% <b>maximum</b> health</span>.',
    leveling: [],
  },
  {
    description:
      'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, he deals <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>. Additionally, if <i>Consume</i> would kill the target minion or small or medium monster, the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> towards <b>Willump</b> over the cast time.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Non-Champion True Damage:',
        raw: '400 / 600 / 800 / 1000 / 1200',
        values: [400, 600, 800, 1000, 1200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '400 / 600 / 800 / 1000 / 1200',
      },
      {
        effectType: 'Heal',
        name: 'Base Non-Champion Heal:',
        raw: '65 / 95 / 125 / 155 / 185 (+ 90% AP) (+ 10% bonus health)',
        healType: 'BonusHealth',
        values: [65, 95, 125, 155, 185],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 95 / 125 / 155 / 185',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 10% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Empowered Non-Champion Heal:',
        raw: '97.5 / 142.5 / 187.5 / 232.5 / 277.5 (+ 135% AP) (+ 15% bonus health)',
        healType: 'BonusHealth',
        values: [97.5, 142.5, 187.5, 232.5, 277.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '97.5 / 142.5 / 187.5 / 232.5 / 277.5',
        children: [
          {
            values: 135,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 135% AP',
          },
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 15% bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and the heal is reduced to 60%.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Champion Magic Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 65% AP) (+ 5% bonus health)',
        healType: 'BonusHealth',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 5% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Base Champion Heal:',
        raw: '39 / 57 / 75 / 93 / 111 (+ 54% AP) (+ 6% bonus health)',
        healType: 'BonusHealth',
        values: [39, 57, 75, 93, 111],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '39 / 57 / 75 / 93 / 111',
        children: [
          {
            values: 54,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 54% AP',
          },
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 6% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Empowered Champion Heal:',
        raw: '58.5 / 99.375 / 140.25 / 181.125 / 222 (+ 81% AP) (+ 9% bonus health)',
        healType: 'BonusHealth',
        values: [58.5, 99.375, 140.25, 181.125, 222],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '58.5 / 99.375 / 140.25 / 181.125 / 222',
        children: [
          {
            values: 81,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 81% AP',
          },
          {
            values: 9,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 9% bonus health',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Nunu_Biggest_Snowball_Ever%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Willump</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 10 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow-immune</a></span> and creating a rolling <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="snowball" src="/wiki/images/Biggest_Snowball_Ever%21_Minimap.png" decoding="async" loading="lazy" title="snowball" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;">snowball</span></span>. <b>Willump</b> automatically navigates his movement and can steer the snowball with a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes.">slow turn rate</span> that increases over time, resetting upon changing direction. The duo have their <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> reduced by <span style="color: #F5EE99; white-space:normal">50%</span> for the first 1 second, but after a delay they start gaining <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated"><span style="color: #F5EE99; white-space:normal">14 movement speed</span></span> every 0.<small>25</small> seconds, <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes.">up to a cap</span>.',
    leveling: [],
  },
  {
    description:
      'The snowball increases in size and power over 5 seconds. <i>Biggest Snowball Ever!</i> can be recast after 0.<small>5</small> seconds during the channel, and does so automatically after the channel or if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
    leveling: [],
  },
  {
    description:
      'The snowball explodes upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">large pet</a></span>, medium / large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or terrain, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="charge time" data-displayformula="increases per frame after 1 second" data-bot_values="0;0;100;200;300;400" data-top_values="0;1;2;3;4;5" data-bot_key="%">0% − 400% (based on charge time)</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="charge time" data-displayformula="Increases per game tick after 1 second." data-bot_values="0.5;0.5;0.56;0.63;0.69;0.75" data-top_values="0;1;2;3;4;5">0.<small>5</small> − 0.<small>75</small> (based on charge time)</span> seconds and subsequently <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="charge time" data-displayformula="Increases per game tick after 2.33 seconds." data-bot_values="0;0;0;0;0.06;0.13;0.19;0.25;0.31;0.38;0.44;0.5" data-top_values="0;1;2;2.33;2.67;3;3.33;3.67;4;4.33;4.67;5">0 − 0.<small>5</small> (based on charge time)</span> seconds.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'The snowball explodes upon hitting an enemy  champion,  large pet, medium / large  monster or terrain, dealing magic damage to nearby enemies, increased by 0% − 400% (based on charge time),  knocking them up for 0',
        damagetype: 'Magic',
        values: [0, 0],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: ',  knocking them up for 0',
        pre: 'The snowball explodes upon hitting an enemy  champion,  large pet, medium / large  monster or terrain, dealing magic damage to nearby enemies, increased by 0% − 400%',
        post: ',  knocking them up for 0',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on charge time',
            pre: 'based on charge time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 − 0',
        values: [5, 0],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '75 (based on charge time) seconds and subsequently  stunning them for 0 − 0',
        values: 75,
        user: 'none',
        units: '',
        unitsText: 'seconds and subsequently  stunning them for 0 − 0',
        pre: '75',
        post: 'seconds and subsequently  stunning them for 0 − 0',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on charge time',
            pre: 'based on charge time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '5 (based on charge time) seconds',
        values: 5,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '5',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on charge time',
            pre: 'based on charge time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '36 / 45 / 54 / 63 / 72 (+ 30% AP)',
        values: [36, 45, 54, 63, 72],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '36 / 45 / 54 / 63 / 72',
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
        name: 'Maximum Magic Damage:',
        raw: '180 / 225 / 270 / 315 / 360 (+ 150% AP)',
        values: [180, 225, 270, 315, 360],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '180 / 225 / 270 / 315 / 360',
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
  {
    description:
      'The snowball rolls over enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small monsters hit, dealing 33.<small>3</small>% of the damage as <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Reduced Damage:',
        raw: '11.988 / 14.985 / 17.982 / 20.979 / 23.976 (+ 9.99% AP)',
        values: [11.988, 14.985, 17.982, 20.979, 23.976],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '11.988 / 14.985 / 17.982 / 20.979 / 23.976',
        children: [
          {
            values: 9.99,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 9.99% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Reduced Damage:',
        raw: '59.94 / 74.925 / 89.91 / 104.895 / 119.88 (+ 49.95% AP)',
        values: [59.94, 74.925, 89.91, 104.895, 119.88],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '59.94 / 74.925 / 89.91 / 104.895 / 119.88',
        children: [
          {
            values: 49.95,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 49.95% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Nunu_Biggest_Snowball_Ever%21_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Willump</b> releases the snowball, sending it rolling forward up to a maximum distance during which it will not grow any larger and will explode upon hitting an enemy.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Nunu_Snowball_Barrage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nunu</b> swiftly throws a volley of 3 snowballs in the target direction over 0.<small>4</small> seconds that each shatter upon hitting an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a cone.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Hit:',
        raw: '16 / 24 / 32 / 40 / 48 (+ 10% AP)',
        values: [16, 24, 32, 40, 48],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16 / 24 / 32 / 40 / 48',
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
        raw: '48 / 72 / 96 / 120 / 144 (+ 30% AP)',
        values: [48, 72, 96, 120, 144],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '48 / 72 / 96 / 120 / 144',
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
    ],
  },
  {
    description:
      'Enemies hit 3 times are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1 second. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">Champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit once are marked <i>Snowbound</i> for 4 seconds, refreshing on each hit. <i>Snowball Barrage</i> can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
    leveling: [
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
      '<span class="template_sbc"><b>Recast:</b></span> <b>Nunu</b> hurls another volley of snowballs, mimicking the first cast\'s effects. An enemy may only be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> once for being hit by snowballs.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Total Magic Damage:',
        raw: '144 / 216 / 288 / 360 / 432 (+ 90% AP)',
        values: [144, 216, 288, 360, 432],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '144 / 216 / 288 / 360 / 432',
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
      'After 3 seconds from the first cast, <i>Snowbound</i> enemies near <b>Willump</b> take <span style="color: #00B0F0; white-space:normal">magic damage</span> and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.5;" data-finish="1.5;" data-bot_values="0.5;0.56;0.62;0.68;0.74;0.79;0.85;0.91;0.97;1.03;1.09;1.15;1.21;1.26;1.32;1.38;1.44;1.5" data-top_values="">0.<small>5</small> − 1.<small>5</small> (based on level)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 − 1',
        values: [5, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 1',
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
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '20 / 30 / 40 / 50 / 60 (+ 80% AP)',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
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
const R: SubSkill[] = [
  {
    img: '/wiki/images/Nunu_Absolute_Zero.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Nunu</b> and <b>Willump</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> a blizzard for up to 3 seconds, granting themself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="Increases by 4.5% every 0.25 seconds. \'\'Starts at 0.25 seconds and finishes at 2.75 seconds\'\'" data-bot_values="0;50;54.5;59;63.5;68;72.5;77;81.5;86;90.5;95;95" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3" data-bot_key="%">0% − 95% (based on channel time)</span>.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 1:',
        raw: ' Nunu and Willump  channel a blizzard for up to 3 seconds, granting themself a  shield and  slowing nearby enemies by 0% − 95% (based on channel time)',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: 3,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          '− 95and Willump  channel a blizzard for up to 3 seconds, granting themself a  shield and  slowing nearby enemies by 0',
        pre: 'Nunu and Willump  channel a blizzard for up to 3 seconds, granting themself a  shield and  slowing nearby enemies by 0% − 95%',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '65 / 75 / 85 (+ 150% AP) (+ 30 / 40 / 50% bonus health)',
        healType: 'BonusHealth',
        values: [65, 75, 85],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 75 / 85',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
          {
            values: [30, 40, 50],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 30 / 40 / 50% bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Absolute Zero</i> can be recast after 0.<small>5</small> seconds during the channel, and does so automatically when the channel ends by any means.',
    leveling: [],
  },
  {
    img: '/wiki/images/Nunu_Absolute_Zero_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Nunu</b> and <b>Willump</b> explode, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, modified to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="Increases the damage by 1% of its damage value every 0.03 seconds." data-bot_values="0;33.33;66.67;100" data-top_values="0;1;2;3" data-bot_key="%">0% − 100% (based on channel time)</span>. Affected enemies will remain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-start="0;0" data-finish="3;3" data-bot_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25;2.5;2.75;3">0 − 3 (based on channel time)</span> seconds and any of the duo\'s remaining shield will decay over 3 seconds.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 2:',
        raw: " Affected enemies will remain  slowed for 0 − 3 (based on channel time) seconds and any of the duo's remaining shield will decay over 3 seconds",
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [0, 3],
        user: 'none',
        units: '',
        unitsText:
          "seconds and any of the duo's remaining shield will decay over 3 seconds",
        pre: 'Affected enemies will remain  slowed for 0 − 3',
        post: "seconds and any of the duo's remaining shield will decay over 3 seconds",
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '625 / 950 / 1275 (+ 300% AP)',
        values: [625, 950, 1275],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '625 / 950 / 1275',
        children: [
          {
            values: 300,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 300% AP',
          },
        ],
      },
    ],
  },
];
export const NunuWillump = { I, Q, W, E, R };
