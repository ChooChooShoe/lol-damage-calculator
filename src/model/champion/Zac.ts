import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Zac';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate - The Secret Weapon:</b></span> <b>Zac</b> gains increased percentage <a href="/wiki/Size" title="Size">size</a> equal to <span style="color: #1F995C; white-space:normal">1.<small>5</small>% of his <b>bonus</b> health</span>, capped at 35% increased size at <span style="color: #1F995C; white-space:normal">2333.<small>3<span style="text-decoration: overline;">3</span></small> <b>bonus</b> health</span>. <b>Zac\'s</b> size also reduces based on his <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span>, down to 70% <b>total</b> size while at <span style="color: #1F995C; white-space:normal">0% health</span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Goo:</b></span> Whenever <b>Zac</b> damages at least one enemy with an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, he sheds a number of chunks of himself to a nearby location, landing towards nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and lasting for 6 seconds.\n',
    leveling: [],
  },
  {
    description:
      'Both <b>Zac</b> and enemy champions can interact with a chunk by being within 50 units of it: an enemy will destroy it, while <b>Zac</b> will consume it to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Let\'s Bounce!.png|20px|border]] Let\'s Bounce!\'s Rank" data-start="4;0" data-finish="7;3" data-bot_values="4;5;6;7" data-top_values="0;1;2;3" data-bot_key="%">4 / 5 / 6 / 7% (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/6/63/Zac_Let%27s_Bounce%21.png/revision/latest?cb=20170818200420" class="image"><img alt="Let\'s Bounce!.png" src="/wiki/images/Zac_Let%27s_Bounce%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Let\'s Bounce!\'s</i> Rank)</span> of his <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " an enemy will destroy it, while Zac will consume it to  heal for 4 / 5 / 6 / 7% (based on  Let's Bounce!'s Rank) of his maximum health",
        healType: 'BonusHealth',
        values: [4, 5, 6, 7],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of his maximum health',
        pre: 'an enemy will destroy it, while Zac will consume it to  heal for 4 / 5 / 6 / 7%',
        post: 'of his maximum health',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Let's Bounce!'s Rank",
            pre: "based on  Let's Bounce!'s Rank",
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Zac_Cell_Division.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Zac</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="8;7;6;5;4" data-top_values="1;6;10;13;17">8 / 7 / 6 / 5 / 4 (based on level)</span> seconds and restores <span style="color: #1F995C; white-space:normal">50% of his <b>maximum</b> health</span>, splitting into 4 uncontrollable <a href="/wiki/Zac#Pets" title="Zac#Pets"><img alt="Cell Division.png" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i><a href="/wiki/Zac#Pets" title="Zac">Bloblets</a></i>. Each <i>bloblet</i> has <span style="color: #1F995C; white-space:normal"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Plus an additional 1 health">12%</span> of his <b>maximum</b> health</span> and moves towards <b>Zac\'s</b> location over the duration. Any damage the <i>bloblets</i> receive, excluding damage dealt in excess of their <span style="color: #1F995C; white-space:normal"><b>total</b> health</span>, is also redirected to <b>Zac</b> in <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>. While in resurrection, <b>Zac</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>, and cannot take damage from sources other than the redirected damage from his <i>bloblets</i>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Periodically, upon taking  fatal damage, Zac enters  resurrection for 8 / 7 / 6 / 5 / 4 (based on level) seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets',
        healType: 'BonusHealth',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText:
          'seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets',
        pre: 'Periodically, upon taking  fatal damage, Zac enters  resurrection for 8 / 7 / 6 / 5 / 4',
        post: 'seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets',
      },
    ],
  },
  {
    description:
      'After the duration, <b>Zac</b> is revived with <span style="color: #1F995C; white-space:normal"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Based on his bloblets\' total remaining health. Reaches the maximum amount at full health on all bloblets">10 - 50%</span> <b>maximum</b> health</span>. <b>Zac</b> will die once all bloblets are killed.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Zac/LoL#Pets" title="Zac/LoL">Pets</a> for more details about bloblets.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Zac_Stretching_Strikes.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> stretches his left arm in the target direction that catches the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% for 0.<small>5</small> seconds, and forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between <b>Zac</b> and the target for 2 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "40 / 55 / 70 / 85 / 100 (+ 30% AP) (+ 4% of Zac's maximum health)",
        healType: 'BonusHealth',
        values: [40, 55, 70, 85, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70 / 85 / 100',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: "of Zac's maximum health",
            pre: "+ 4% of Zac's maximum health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "80 / 110 / 140 / 170 / 200 (+ 60% AP) (+ 8% of Zac's maximum health)",
        healType: 'BonusHealth',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: "of Zac's maximum health",
            pre: "+ 8% of Zac's maximum health",
          },
        ],
      },
    ],
  },
  {
    description:
      'While the tether persists, <b>Zac\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is replaced by a second <i>Stretching Strike</i>, empowering it to have a 0.<small>25</small>-second cast time and gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span>. This attack cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    leveling: [],
  },
  {
    description:
      'If the two <i>Stretching Strikes</i> affect different targets, both are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>5</small></span> seconds and receive the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>. After a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After the attack\'s cast time">0.<small>4</small>-second delay</span>, <b>Zac</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Only move block, does not stun the target\'s actions (disables attacking and movement only)">displaces</span> them toward each other over 300-units, though not through terrain.',
    leveling: [],
  },
  {
    description:
      'If the two targets are <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="700 range">near</span> each other, they are instead slammed together through the displacement, dealing the initial <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>25</small> seconds upon impact. Surrounding enemies are also dealt the initial <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [],
  },
  {
    description:
      '<i>Both Stretching Strikes (the cast and the empowered attack) <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">reset</a></span> <b>Zac\'s</b> basic attack timer. <b>Zac</b> is unable to move or attack while his left arm is in flight.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Zac_Unstable_Matter.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "35 / 50 / 65 / 80 / 95 (+ 4 / 5 / 6 / 7 / 8% (+ 3% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [35, 50, 65, 80, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 50 / 65 / 80 / 95',
        children: [
          {
            values: [4, 5, 6, 7, 8],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 4 / 5 / 6 / 7 / 8%',
            post: "of target's maximum health",
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Capped Non-Champion Damage:',
        raw: '235 / 250 / 265 / 280 / 295',
        values: [235, 250, 265, 280, 295],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '235 / 250 / 265 / 280 / 295',
      },
    ],
  },
  {
    description:
      '<b>Zac</b> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghost"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> to monsters hit for 5 seconds.',
    leveling: [],
  },
  {
    description:
      '<i>Unstable Matter\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 1 second whenever <b>Zac</b> collects a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="Cell Division"><img alt="Cell Division" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">Cell Division</a></span></span></i> chunk.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Zac_Elastic_Slingshot.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 4.<small>5</small> seconds to increase <i>Elastic Slingshot\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> over a cone in the target direction.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Range Channel Duration:',
        raw: '0.9 / 1 / 1.1 / 1.2 / 1.3',
        values: [0.9, 1, 1.1, 1.2, 1.3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.9 / 1 / 1.1 / 1.2 / 1.3',
      },
    ],
  },
  {
    description:
      '<i>Elastic Slingshot</i> can be recast within the duration. If <b>Zac</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">cancels</span> the channel himself, or the charge completes without reactivation, 50% of <i>Elastic Slingshot\'s</i> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health cost</span></span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> are refunded.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zac</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location. Upon landing, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 0.<small>5</small> seconds, increased to 1 second if <i>Elastic Slingshot</i> was charged for more than 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 80% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
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
  {
    description:
      '<i>Elastic Slingshot will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Healing from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="Cell Division"><img alt="Cell Division" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">Cell Division</a></span></span></i> chunks is increased.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Chunk Healing:',
        raw: '5 / 6 / 7% of his maximum health',
        healType: 'BonusHealth',
        values: [5, 6, 7],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of his maximum health',
        pre: '5 / 6 / 7% of his maximum health',
      },
    ],
  },
  {
    img: '/wiki/images/Zac_Let%27s_Bounce%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="duration" data-start="20;0" data-finish="50;3" data-bot_values="20;25;30;35;40;45;50" data-top_values="0;0.5;1;1.5;2;2.5;3" data-bot_key="%">20% − 50% (based on duration)</span> <b>bonus</b> movement speed</span></span> but becomes unable to declare basic attacks and cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Stretching Strikes" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Stretching Strikes"><img alt="Stretching Strikes" src="/wiki/images/Zac_Stretching_Strikes.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Zac/LoL">Stretching Strikes</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Elastic Slingshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Elastic_Slingshot" title="Elastic Slingshot"><img alt="Elastic Slingshot" src="/wiki/images/Zac_Elastic_Slingshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Elastic_Slingshot" title="Zac/LoL">Elastic Slingshot</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Zac bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains  20% − 50% (based on duration) bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot',
        increasedStat: 'bonus_ad',
        values: 3,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText:
          'bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot',
        pre: 'Zac bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains  20% − 50%',
        post: 'bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on duration',
            pre: 'based on duration',
          },
        ],
      },
    ],
  },
  {
    description:
      'Each bounce deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> over 1 second, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 20% for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '140 / 210 / 280 (+ 40% AP)',
        values: [140, 210, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 210 / 280',
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
      'An enemy can be hit by multiple bounces, but ones beyond the first deal 50% damage to them and do not apply the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '70 / 105 / 140 (+ 20% AP)',
        values: [70, 105, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '350 / 525 / 700 (+ 100% AP)',
        values: [350, 525, 700],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '350 / 525 / 700',
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
];
export const Zac = { I, Q, W, E, R };
