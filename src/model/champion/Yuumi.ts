import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Yuumi';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Yuumi_Bop_%27n%27_Block.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Yuumi</b> empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>, restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="100;" data-bot_values="25;29.41;33.82;38.24;42.65;47.06;51.47;55.88;60.29;64.71;69.12;73.53;77.94;82.35;86.76;91.18;95.59;100" data-top_values="">25 − 100 (based on level)</span></span> <span style="color: #0099CC; white-space:normal">(+&nbsp;8% <b>maximum</b> mana)</span> <span style="color: #0099CC; white-space:normal">mana</span></span> and grant her a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;" data-finish="300;" data-bot_values="45;60;75;90;105;120;135;150;165;180;195;210;225;240;255;270;285;300" data-top_values="">45 − 300 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> that lasts until it is destroyed.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 1:',
        raw: ' Periodically, Yuumi empowers her next basic attack against an enemy  champion to gain  25 bonus range, have an  uncancellable windup, become  non-projectile, restore  25 − 100 (based on level) (+ 8% maximum mana) mana and grant her a  shield for 45 − 300 (based on level) (+ 25% AP) that lasts until it is destroyed',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [
          25, 29.41, 33.82, 38.24, 42.65, 47.06, 51.47, 55.88, 60.29, 64.71,
          69.12, 73.53, 77.94, 82.35, 86.76, 91.18, 95.59, 100,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'mana and grant her a  shield for 45 − 300',
        pre: 'Periodically, Yuumi empowers her next basic attack against an enemy  champion to gain  25 bonus range, have an  uncancellable windup, become  non-projectile, restore  25 − 100',
        post: 'mana and grant her a  shield for 45 − 300',
        children: [
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_mana',
            unitsText: 'maximum mana',
            pre: '+ 8% maximum mana',
          },
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
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> The shield transfers to the <i>Anchor</i>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Yuumi_Prowling_Projectile.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> fires an errant missile in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 80 / 110 / 140 / 170 / 200 (+ 30% AP)',
        values: [50, 80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170 / 200',
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
      'If the missile is in flight for 1 second, it deals increased damage, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> by 20% for 1 second against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. The damage based on the target\'s health ratio is capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="300;" data-bot_values="50;64.71;79.41;94.12;108.82;123.53;138.24;152.94;167.65;182.35;197.06;211.76;226.47;241.18;255.88;270.59;285.29;300" data-top_values="">50 − 300 (based on level)</span> against non-champions.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: " The damage based on the target's health ratio is capped at 50 − 300 (based on level) against non-champions",
        healType: 'OutgoingHeals',
        values: [
          50, 64.71, 79.41, 94.12, 108.82, 123.53, 138.24, 152.94, 167.65,
          182.35, 197.06, 211.76, 226.47, 241.18, 255.88, 270.59, 285.29, 300,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'against non-champions',
        pre: "The damage based on the target's health ratio is capped at 50 − 300",
        post: 'against non-champions',
      },
      {
        effectType: 'Heal',
        name: 'Increased Damage:',
        raw: "60 / 100 / 140 / 180 / 220 / 260 (+ 40% AP) (+ 3 / 4.2 / 5.4 / 6.6 / 7.8 / 9% of the target's current health)",
        healType: 'OutgoingHeals',
        values: [60, 100, 140, 180, 220, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220 / 260',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: [3, 4.2, 5.4, 6.6, 7.8, 9],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of the target's current health",
            pre: "+ 3 / 4.2 / 5.4 / 6.6 / 7.8 / 9% of the target's current health",
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Yuumi_Prowling_Projectile_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> <b>Yuumi</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> for up to 2 seconds to steer the missile, after which it fizzles.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> The <i>Anchor</i> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> or <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> based on which was already higher. The percentage <b>bonus</b> of <i>You and Me!</i> also benefits from its flat <b>bonus</b>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: "7.2 / 8.4 / 9.6 / 10.8 / 12 (+ 6 / 7 / 8 / 9 / 10% of Anchor's bonus AD)",
        values: [7.2, 8.4, 9.6, 10.8, 12],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.2 / 8.4 / 9.6 / 10.8 / 12',
        children: [
          {
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: "of Anchor's bonus AD",
            pre: "+ 6 / 7 / 8 / 9 / 10% of Anchor's bonus AD",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Ability Power:',
        raw: "12 / 14 / 16 / 18 / 20 (+ 6 / 7 / 8 / 9 / 10% of Anchor's AP)",
        values: [12, 14, 16, 18, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 14 / 16 / 18 / 20',
        children: [
          {
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: "of Anchor's AP",
            pre: "+ 6 / 7 / 8 / 9 / 10% of Anchor's AP",
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Yuumi</b> gains flat <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Adaptive force"><a href="/wiki/Adaptive_force" title="Adaptive force"><img alt="Adaptive Force icon.png" src="/wiki/images/Adaptive_Force_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Adaptive_force" title="Adaptive force">adaptive force</a></span> plus an amount based on a portion of the <i>Anchor\'s</i> <b>current</b> <span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span> or <span style="color: #7A6DFF; white-space:normal">ability power</span>, whichever is higher. Additionally, <b>Yuumi</b> starts with a skill point in <i>You and Me!</i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Prowling Projectile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Prowling_Projectile" title="Prowling Projectile"><img alt="Prowling Projectile" src="/wiki/images/Yuumi_Prowling_Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Prowling_Projectile" title="Yuumi/LoL">Prowling Projectile</a></span></span></i> instead has 6 ranks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Adaptive Force:',
        raw: '12 / 14 / 16 / 18 / 20',
        values: [12, 14, 16, 18, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 14 / 16 / 18 / 20',
      },
      {
        effectType: 'Unique',
        name: 'Adaptive Force per 100 bonus AD:',
        raw: '10 / 11.67 / 13.33 / 15 / 16.67',
        values: [10, 11.67, 13.33, 15, 16.67],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 11.67 / 13.33 / 15 / 16.67',
      },
      {
        effectType: 'Unique',
        name: 'Adaptive Force per 100 AP:',
        raw: '6 / 7 / 8 / 9 / 10',
        values: [6, 7, 8, 9, 10],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 7 / 8 / 9 / 10',
      },
    ],
  },
  {
    img: '/wiki/images/Yuumi_You_and_Me%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 0.<small>25</small> seconds, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="The Anchor">allied champion</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaches</a></span> to them upon arrival. While attached, <b>Yuumi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> (except from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and inbound <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>) and casts her spells from the <i>Anchor\'s</i> position. The cooldown starts upon completing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span>. <i>You and Me!</i> can be recast after 0.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i><b>Yuumi</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control during the dash.</i>',
    leveling: [],
  },
  {
    img: '/wiki/images/Yuumi_Change_of_Plan.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Yuumi</b> switches her <i>Anchor</i> to the target allied champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaches</a></span> to them, refreshing the recast. She will <i>detach</i> automatically if her <i>Anchor</i> dies or under <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="In the notes below">certain circumstances</span>. If recast without a valid target, <b>Yuumi</b> will <i>detach</i> from her <i>Anchor</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> 250-units in the target direction, placing <i>You and Me!</i> on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>25</small></span>-second cooldown if it is not already on cooldown.',
    leveling: [],
  },
  {
    description:
      '<i>You and Me!</i> is placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;5-second</span> cooldown if <b>Yuumi</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Yuumi_Zoomies.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
        values: [70, 90, 110, 130, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 90 / 110 / 130 / 150',
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
        name: 'Bonus Attack Speed:',
        raw: '25 / 30 / 35 / 40 / 45%',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45%',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> <i>Zoomies</i> affects the <i>Anchor</i> instead of <b>Yuumi</b>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Yuumi_Final_Chapter.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> and <i>Book</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> for up to 3.<small>5</small> seconds, launching 7 waves in the target direction that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit take only 50% damage from subsequent waves, and when they are struck by three waves, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>25</small> seconds. This may occur only once per target.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Wave:',
        raw: '60 / 80 / 100 (+ 20% AP)',
        values: [60, 80, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100',
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
        name: 'Reduced Damage Per Wave:',
        raw: '30 / 40 / 50 (+ 10% AP)',
        values: [30, 40, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50',
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
        name: 'Maximum Champion Damage:',
        raw: '240 / 320 / 400 (+ 80% AP)',
        values: [240, 320, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '240 / 320 / 400',
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
        name: 'Maximum Non-Champion Damage:',
        raw: '420 / 560 / 700 (+ 140% AP)',
        values: [420, 560, 700],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '420 / 560 / 700',
        children: [
          {
            values: 140,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 140% AP',
          },
        ],
      },
    ],
  },
];
export const Yuumi = { I, Q, W, E, R };
