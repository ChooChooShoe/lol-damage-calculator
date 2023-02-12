import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Kayn';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Kayn_The_Darkin_Scythe.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Kayn</b> has a secondary <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Additional info in the notes below">experience bar</span> that tracks progress toward his <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Darkin"><img alt="Darkin" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Darkin</strong></span></span> and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Shadow Assassin</strong></span></span> forms. He gathers orbs from champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span> and each instance of damage (excluding <a href="/wiki/Damage_over_time" title="Damage over time">damage over time</a>) dealt against champions. Once he has earned enough orbs, he unlocks a form based on whether he earned more from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> champions (for <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Darkin"><img alt="Darkin" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Darkin</strong></span></span> and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Shadow Assassin</strong></span></span>, respectively), with the other form unlocked later.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kayn_Form_Selection_UI.png',
    description:
      '<b>Kayn</b> can move near the <a href="/wiki/Spawn" title="Spawn">summoning platform</a> to transform over 6 seconds, during which he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and unable to act. <b>Kayn</b> cannot choose a form if he is unable to cast abilities. The transformation will grant a passive bonus and permanently empower some of <b>Kayn\'s</b> abilities based on the form chosen. He gains a one-time <a href="/wiki/Homeguard" title="Homeguard">Homeguard</a> once the transformation is complete.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kayn_The_Darkin_Scythe_A.png',
    description:
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> If <b>Kayn</b> has been <a href="/wiki/Combat_status" title="Combat status">out of combat</a> with enemy champions for over 8 seconds, or he casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Umbral Trespass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Umbral Trespass"><img alt="Umbral Trespass" src="/wiki/images/Kayn_Umbral_Trespass.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Kayn/LoL">Umbral Trespass</a></span></span></i>, he deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="45;" data-bot_values="15;16.76;18.53;20.29;22.06;23.82;25.59;27.35;29.12;30.88;32.65;34.41;36.18;37.94;39.71;41.47;43.24;45" data-top_values="" data-bot_key="%">15% − 45% (based on level)</span> of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt against enemy champions as <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt. If this effect is ready, it will not be lost by taking damage.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' If Kayn has been out of combat with enemy champions for over 8 seconds, or he casts  Umbral Trespass, he deals 15% − 45% (based on level) of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt',
        increasedStat: 'total_ap',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText:
          'of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt',
        pre: 'If Kayn has been out of combat with enemy champions for over 8 seconds, or he casts  Umbral Trespass, he deals 15% − 45%',
        post: 'of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt',
      },
    ],
  },
  {
    img: '/wiki/images/Kayn_The_Darkin_Scythe_R.png',
    description:
      '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <b>Rhaast</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="30;" data-bot_values="20;20.59;21.18;21.76;22.35;22.94;23.53;24.12;24.71;25.29;25.88;26.47;27.06;27.65;28.24;28.82;29.41;30" data-top_values="" data-bot_key="%">20% − 30% (based on level)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">physical damage</span></a></span> that he deals to enemy champions with his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Rhaast  heals for 20% − 30% (based on level) of the post-mitigation  physical damage that he deals to enemy champions with his abilities',
        healType: 'PhysicalVamp',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'of the post-mitigation  physical damage that he deals to enemy champions with his abilities',
        pre: 'Rhaast  heals for 20% − 30%',
        post: 'of the post-mitigation  physical damage that he deals to enemy champions with his abilities',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Kayn_Reaping_Slash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through. He then swings his scythe, dealing the same damage to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '75 / 95 / 115 / 135 / 155 (+ 80% bonus AD)',
        values: [75, 95, 115, 135, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 95 / 115 / 135 / 155',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '150 / 190 / 230 / 270 / 310 (+ 160% bonus AD)',
        values: [150, 190, 230, 270, 310],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 190 / 230 / 270 / 310',
        children: [
          {
            values: 160,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 160% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Both instances of <i>Reaping Slash</i> deal <span style="color: #FF8C34; white-space:normal">40 <b>bonus</b> physical damage</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Non-Champion Damage:',
        raw: '115 / 135 / 155 / 175 / 195 (+ 80% bonus AD)',
        values: [115, 135, 155, 175, 195],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '115 / 135 / 155 / 175 / 195',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Non-Champion Damage:',
        raw: '230 / 270 / 310 / 350 / 390 (+ 160% bonus AD)',
        values: [230, 270, 310, 350, 390],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '230 / 270 / 310 / 350 / 390',
        children: [
          {
            values: 160,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 160% bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kayn_Reaping_Slash_R.png',
    description:
      '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Reaping Slash\'s</i> damage is modified to deal <span style="color:orange; white-space:normal">65% AD</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% <span style="color:orange; white-space:normal">(+&nbsp;3.<small>5</small>% per 100 <b>bonus</b> AD)</span> of the target\'s <b>maximum</b> health)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> for both instances. This damage has a cap against monsters that does not include the <b>bonus</b> damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Capped Monster Damage per Hit:',
        raw: '200 / 250 / 300 / 350 / 400',
        values: [200, 250, 300, 350, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 250 / 300 / 350 / 400',
      },
      {
        effectType: 'Unique',
        name: 'Total Capped Monster Damage:',
        raw: '400 / 500 / 600 / 700 / 800',
        values: [400, 500, 600, 700, 800],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '400 / 500 / 600 / 700 / 800',
      },
    ],
  },
  {
    description:
      '<i>Reaping Slash\'s dash speed scales with <b>Kayn\'s</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>total</b> movement speed</span></span>.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Kayn_Blade%27s_Reach.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> swings his scythe in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 90% decaying over 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '90 / 135 / 180 / 225 / 270 (+ 130% bonus AD)',
        values: [90, 135, 180, 225, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 135 / 180 / 225 / 270',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 130% bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kayn_Blade%27s_Reach_A.png',
    description:
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Blade\'s Reach\'s</i> radius is extended by 200 units. <b>Kayn</b> conjures an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> <i>shadow</i> at the casting position to perform <i>Blade\'s Reach\'s</i> sweep over 0.<small>55</small> seconds in his stead, removing the ability\'s cast time.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kayn_Blade%27s_Reach_R.png',
    description:
      '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Blade\'s Reach</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> enemies hit for 1 second.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Kayn_Shadow_Step.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus total</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and the ability to ignore terrain collision for a duration. If he has been <a href="/wiki/Combat_status" title="Combat status">in combat</a> with enemy champions within the last 3 seconds, <i>Shadow Step</i> will instead last 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Duration:',
        raw: '7 / 7.5 / 8 / 8.5 / 9',
        values: [7, 7.5, 8, 8.5, 9],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7 / 7.5 / 8 / 8.5 / 9',
      },
    ],
  },
  {
    description:
      '<b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself upon entering terrain for the first time from casting <i>Shadow Step</i> and he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span> while inside.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '90 / 100 / 110 / 120 / 130 (+ 45% bonus AD)',
        values: [90, 100, 110, 120, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 100 / 110 / 120 / 130',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 45% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Receiving damage from or dealing damage to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> while <i>Shadow Step</i> is active reduces its remaining duration to 1.<small>5</small> seconds. This effect also cannot remain active out of terrain for longer than 1.<small>5</small> seconds and will cancel immediately if <b>Kayn</b> performs a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, excluding from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '5 seconds and will cancel immediately if Kayn performs a basic attack or becomes  immobilized, excluding from  sleep(bug), or  polymorphed',
        values: 5,
        user: 'none',
        units: '',
        unitsText: ', or  polymorphed',
        pre: '5 seconds and will cancel immediately if Kayn performs a basic attack or becomes  immobilized, excluding from  sleep',
        post: ', or  polymorphed',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'bug',
            pre: 'bug',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kayn_Shadow_Step_A.png',
    description:
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Shadow Step\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced to 8 seconds at all ranks. <b>Kayn</b> gains 100% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> while active and, upon entering terrain, the <span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span> is increased to <span style="color: #F5EE99; white-space:normal">80%</span> for the remaining duration.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kayn</b> <i>marks</i> enemy champions he damaged in the last 3.<small>15</small> seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kayn_Umbral_Trespass.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to a <i>marked</i> enemy champion. Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaching</a></span> to the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them. <i>Umbral Trespass</i> can be recast after 0.<small>75</small> seconds during the channel, and does so automatically after the duration or if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kayn_Umbral_Trespass_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> After a 0.<small>75</small>-second delay, <b>Kayn</b> deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> out from their body in the target direction while still being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '150 / 250 / 350 (+ 175% bonus AD)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 175,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 175% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Umbral Trespass</i> gains 200 <b>bonus</b> cast range and emerge range. Additionally, emerging will reset <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="The Darkin Scythe A" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#The_Darkin_Scythe_A" title="The Darkin Scythe\'s"><img alt="The Darkin Scythe\'s" src="/wiki/images/Kayn_The_Darkin_Scythe_A.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#The_Darkin_Scythe_A" title="Kayn/LoL">The Darkin Scythe\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kayn_Umbral_Trespass_2_R.png',
    description:
      '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Umbral Trespass</i> is modified to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> equal to <span style="color: #1F995C; white-space:normal">15% <span style="color:orange; white-space:normal">(+&nbsp;13% per 100 <b>bonus</b> AD)</span> of the target\'s <b>maximum</b> health</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> him for <span style="color: #1F995C; white-space:normal">9.<small>75</small>% <span style="color:orange; white-space:normal">(+&nbsp;8.<small>45</small>% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Umbral Trespass is modified to deal physical damage equal to 15% (+ 13% per 100 bonus AD) of the target's maximum health, and  heals him for 9",
        healType: 'PhysicalVamp',
        values: 1,
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health, and  heals him for 9",
        pre: 'Umbral Trespass is modified to deal physical damage equal to 15%',
        post: "of the target's maximum health, and  heals him for 9",
        children: [
          {
            values: 13,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 13% per 100 bonus AD',
          },
        ],
      },
    ],
  },
];
export const Kayn = { I, Q, W, E, R };
