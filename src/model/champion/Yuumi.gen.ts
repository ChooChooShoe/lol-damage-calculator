import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Yuumi';

export default {
  "Bop 'n' Block": {
    name: "Bop 'n' Block",
    display_name: "Bop 'n' Block",
    champion: 'Yuumi',
    skill: 'I',
    image: {
      full: 'YuumiP.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="18;" data-finish="6;" data-bot_values="18;17.29;16.59;15.88;15.18;14.47;13.76;13.06;12.35;11.65;10.94;10.24;9.53;8.82;8.12;7.41;6.71;6" data-top_values="">18 − 6 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL" title="Yuumi\'s"><img alt="Yuumi\'s" src="/wiki/images/Yuumi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL" title="Yuumi/LoL">Yuumi\'s</a></span></span> next basic attack will restore <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana</span></span> based on <span style="color: #0099CC; white-space:normal">her <b>maximum</b> mana</span>, and generate a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts until broken.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> The shield transfers to the <i>Anchor</i>.',
    ],
    description: [
      {
        icon: "/wiki/images/Bop_'n'_Block.png",
        description:
          'Innate: Periodically, Yuumi empowers her next basic attack against an enemy  champion to gain  25 bonus range, have an  uncancellable windup, become  non-projectile, restore  25 − 100 (based on level) (+ 8% maximum mana) mana and grant her a  shield for 45 − 300 (based on level) (+ 25% AP) that lasts until it is destroyed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Yuumi</b> empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>, restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="100;" data-bot_values="25;29.41;33.82;38.24;42.65;47.06;51.47;55.88;60.29;64.71;69.12;73.53;77.94;82.35;86.76;91.18;95.59;100" data-top_values="">25 − 100 (based on level)</span></span> <span style="color: #0099CC; white-space:normal">(+&nbsp;8% <b>maximum</b> mana)</span> <span style="color: #0099CC; white-space:normal">mana</span></span> and grant her a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;" data-finish="300;" data-bot_values="45;60;75;90;105;120;135;150;165;180;195;210;225;240;255;270;285;300" data-top_values="">45 − 300 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> that lasts until it is destroyed.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Innate:',
            raw: 'Periodically, Yuumi empowers her next basic attack against an enemy  champion to gain  25 bonus range, have an  uncancellable windup, become  non-projectile, restore  25 − 100 (based on level) (+ 8% maximum mana) mana and grant her a  shield for 45 − 300 (based on level) (+ 25% AP) that lasts until it is destroyed.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [
              25, 29.41, 33.82, 38.24, 42.65, 47.06, 51.47, 55.88, 60.29, 64.71,
              69.12, 73.53, 77.94, 82.35, 86.76, 91.18, 95.59, 100,
            ],
            basedOn: 'level',
            units: 'total_mana',
            unitsText: 'mana and grant her a  shield for 45 − 300',
            pre: 'Periodically, Yuumi empowers her next basic attack against an enemy  champion to gain  25 bonus range, have an  uncancellable windup, become  non-projectile, restore  25 − 100',
            post: 'mana and grant her a  shield for 45 − 300',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                units: 'total_mana',
                unitsText: 'maximum mana',
                pre: '+ 8% maximum mana',
              },
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Attached Bonus: The shield transfers to the Anchor.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> The shield transfers to the <i>Anchor</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    projectile: 'False',
    notes:
      '* This ability will apply to a basic attack already in flight, but will not augment it into a non-projectile.\n<ul><li><i>Bop \'n\' Block</i> will not proc if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <b>Yuumi</b> misses the attack while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>. It will proc even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li>Although the shield doesn\'t expire, it will never stack with itself.</li>\n<li>Considering <b>Yuumi\'s</b> <span style="color: #0099CC; white-space:normal"><b>base</b> mana</span>, <i>Bop \'n\' Block\'s </i>mana restore is increased by <b>at least</b> <span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="(400+45*(x-1)*(0.7025+0.0175*(x-1)))*0.08" data-bot_values="32;34.59;37.31;40.15;43.12;46.22;49.44;52.79;56.26;59.86;63.59;67.44;71.42;75.52;79.75;84.11;88.59;93.2" data-top_values="">32 − 93.<small>2</small> (based on level)</span></span>.</li></ul>',
  },
  'Prowling Projectile': {
    name: 'Prowling Projectile',
    display_name: 'Prowling Projectile',
    champion: 'Yuumi',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'YuumiQ.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1150',
    speed: '1000',
    cast_time: 'none',
    cost: '90',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast when unattached, starts post-effect when attached">13.<small>5</small> / 12 / 10.<small>5</small> / 9 / 7.<small>5</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL" title="Yuumi"><img alt="Yuumi" src="/wiki/images/Yuumi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL" title="Yuumi/LoL">Yuumi</a></span></span> fires an errant missile in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
      'If the missile is in flight for a brief moment, it becomes empowered to deal increased damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>current</b> health</span>. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">Champions</a></span> hit will also be briefly slowed.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> <b>Yuumi</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> up to a short time to steer the missile.',
    ],
    description: [
      {
        icon: '/wiki/images/Prowling_Projectile.png',
        description:
          'Active: Yuumi fires an errant missile in the target direction that deals magic damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> fires an errant missile in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 80 / 110 / 140 / 170 / 200 (+ 30% AP)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 / 200 (+ 30% AP)',
            damagetype: 'Magic',
            values: [50, 80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170 / 200',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If the missile is in flight for 1 second, it deals increased damage, and  slows by 20% for 1 second against  champions. The damage based on the target's health ratio is capped at 50 − 300 (based on level) against non-champions.",
        descriptionHTML:
          'If the missile is in flight for 1 second, it deals increased damage, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> by 20% for 1 second against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. The damage based on the target\'s health ratio is capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="300;" data-bot_values="50;64.71;79.41;94.12;108.82;123.53;138.24;152.94;167.65;182.35;197.06;211.76;226.47;241.18;255.88;270.59;285.29;300" data-top_values="">50 − 300 (based on level)</span> against non-champions.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If the missile is in flight for 1 second, it deals increased damage, and  slows by 20% for 1 second against  champions',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1 second against  championsthe missile is in flight for 1 second, it deals increased damage, and  slows by 20',
            pre: 'If the missile is in flight for 1 second, it deals increased damage, and  slows by 20% for 1 second against  champions',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The damage based on the target's health ratio is capped at 50 − 300 (based on level) against non-champions.",
            healType: 'OutgoingHeals',
            values: [
              50, 64.71, 79.41, 94.12, 108.82, 123.53, 138.24, 152.94, 167.65,
              182.35, 197.06, 211.76, 226.47, 241.18, 255.88, 270.59, 285.29,
              300,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'against non-champions.',
            pre: "The damage based on the target's health ratio is capped at 50 − 300",
            post: 'against non-champions.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values:
              "60 / 100 / 140 / 180 / 220 / 260 (+ 40% AP) (+ 3 / 4.2 / 5.4 / 6.6 / 7.8 / 9% of the target's current health)",
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;3 / 4.<small>2</small> / 5.<small>4</small> / 6.<small>6</small> / 7.<small>8</small> / 9% of the target\'s <b>current</b> health)</span>',
          },
        ],
        levelingRatios: [
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
        icon: '/wiki/images/Prowling_Projectile_2.png',
        description:
          'Attached Bonus: Yuumi will  channel for up to 2 seconds to steer the missile, after which it fizzles.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> <b>Yuumi</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> for up to 2 seconds to steer the missile, after which it fizzles.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Attached Bonus:',
            raw: 'Yuumi will  channel for up to 2 seconds to steer the missile, after which it fizzles.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'will  channel for up to 2 seconds to steer the missile, after which it fizzles.',
            pre: 'Yuumi will  channel for up to 2 seconds to steer the missile, after which it fizzles.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Prowling Projectile</i> can be buffered 0.<small>5</small> seconds before it comes off cooldown.\n<ul><li><b>Yuumi</b> and her <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Anchor"><img alt="Anchor" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Anchor</a></span></span> can see the effective range of <i>Prowling Projectile</i>.</li>\n<li>The following table refers for interactions while <b>Yuumi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Change of Plan" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Change_of_Plan" title="Detaching"><img alt="Detaching" src="/wiki/images/Yuumi_Change_of_Plan.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Change_of_Plan" title="Yuumi/LoL">Detaching</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Final Chapter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Final_Chapter" title="Final Chapter"><img alt="Final Chapter" src="/wiki/images/Yuumi_Final_Chapter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Final_Chapter" title="Yuumi/LoL">Final Chapter</a></span></span> interrupt. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Zoomies" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Zoomies" title="Zoomies"><img alt="Zoomies" src="/wiki/images/Yuumi_Zoomies.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Zoomies" title="Yuumi/LoL">Zoomies</a></span></span> is usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  'You and Me!': {
    name: 'You and Me!',
    display_name: 'You and Me!',
    champion: 'Yuumi',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'YuumiW.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '700',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Not improved by current MS">1200 / 1300 / 1400 / 1500 / 1600</span>',
    cast_time: 'none',
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on first cast"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10;5;0" data-top_values="1;6;11">10 / 5 / 0 (based on level)</span></span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL" title="Yuumi"><img alt="Yuumi" src="/wiki/images/Yuumi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL" title="Yuumi/LoL">Yuumi</a></span></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span>, the <i>Anchor</i> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> or <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> based on which was already higher. <b>Yuumi</b> also becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Adaptive force"><a href="/wiki/Adaptive_force" title="Adaptive force"><img alt="Adaptive Force icon.png" src="/wiki/images/Adaptive_Force_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Adaptive_force" title="Adaptive force">adaptive force</a></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target allied champion to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attach</a></span> to them, who becomes the <i>Anchor</i> to which her abilities cast from. <i>You and Me!</i> can be recast while attached.',
      '<b>Yuumi</b> switches her <i>Anchor</i> to the target allied champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaches</a></span> to them. If this is cast without a target, she will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> in the target direction to detach.',
      '<i>You and Me!</i> is placed on a short <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> if <b>Yuumi</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.',
    ],
    description: [
      {
        description:
          'Passive: The Anchor gains  bonus attack damage or  ability power based on which was already higher. The percentage bonus of You and Me! also benefits from its flat bonus.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> The <i>Anchor</i> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> or <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> based on which was already higher. The percentage <b>bonus</b> of <i>You and Me!</i> also benefits from its flat <b>bonus</b>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values:
              "7.2 / 8.4 / 9.6 / 10.8 / 12 (+ 6 / 7 / 8 / 9 / 10% of Anchor's bonus AD)",
            valuesHTML:
              '7.<small>2</small> / 8.<small>4</small> / 9.<small>6</small> / 10.<small>8</small> / 12 <span style="color:orange; white-space:normal">(+&nbsp;6 / 7 / 8 / 9 / 10% of <i>Anchor\'s</i> <b>bonus</b> AD)</span>',
          },
          {
            name: 'Ability Power:',
            values:
              "12 / 14 / 16 / 18 / 20 (+ 6 / 7 / 8 / 9 / 10% of Anchor's AP)",
            valuesHTML:
              '12 / 14 / 16 / 18 / 20 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6 / 7 / 8 / 9 / 10% of <i>Anchor\'s</i> AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: "7.2 / 8.4 / 9.6 / 10.8 / 12 (+ 6 / 7 / 8 / 9 / 10% of Anchor's bonus AD)",
            damagetype: 'None',
            values: [7.2, 8.4, 9.6, 10.8, 12],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.2 / 8.4 / 9.6 / 10.8 / 12',
            children: [
              {
                values: [6, 7, 8, 9, 10],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: "of Anchor's bonus AD",
                pre: "+ 6 / 7 / 8 / 9 / 10% of Anchor's bonus AD",
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Ability Power:',
            raw: "12 / 14 / 16 / 18 / 20 (+ 6 / 7 / 8 / 9 / 10% of Anchor's AP)",
            damagetype: 'None',
            values: [12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 14 / 16 / 18 / 20',
            children: [
              {
                values: [6, 7, 8, 9, 10],
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: "of Anchor's AP",
                pre: "+ 6 / 7 / 8 / 9 / 10% of Anchor's AP",
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Yuumi gains flat  adaptive force plus an amount based on a portion of the Anchor's current bonus attack damage or ability power, whichever is higher. Additionally, Yuumi starts with a skill point in You and Me! and  Prowling Projectile instead has 6 ranks.",
        descriptionHTML:
          '<b>Yuumi</b> gains flat <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Adaptive force"><a href="/wiki/Adaptive_force" title="Adaptive force"><img alt="Adaptive Force icon.png" src="/wiki/images/Adaptive_Force_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Adaptive_force" title="Adaptive force">adaptive force</a></span> plus an amount based on a portion of the <i>Anchor\'s</i> <b>current</b> <span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span> or <span style="color: #7A6DFF; white-space:normal">ability power</span>, whichever is higher. Additionally, <b>Yuumi</b> starts with a skill point in <i>You and Me!</i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Prowling Projectile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Prowling_Projectile" title="Prowling Projectile"><img alt="Prowling Projectile" src="/wiki/images/Yuumi_Prowling_Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Prowling_Projectile" title="Yuumi/LoL">Prowling Projectile</a></span></span></i> instead has 6 ranks.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Additionally, Yuumi starts with a skill point in You and Me! and  Prowling Projectile instead has 6 ranks.',
            damagetype: 'None',
            values: 6,
            units: 'total_ad',
            unitsText:
              'Yuumi starts with a skill point in You and Me! and  Prowling Projectile instead has 6 ranks.',
            pre: 'Additionally, Yuumi starts with a skill point in You and Me! and  Prowling Projectile instead has 6 ranks.',
          },
        ],
        leveling: [
          {
            name: 'Adaptive Force:',
            values: '12 / 14 / 16 / 18 / 20',
            valuesHTML: '12 / 14 / 16 / 18 / 20',
          },
          {
            name: 'Adaptive Force per 100 bonus AD:',
            values: '10 / 11.67 / 13.33 / 15 / 16.67',
            valuesHTML:
              '10 / 11.<small>67</small> / 13.<small>33</small> / 15 / 16.<small>67</small>',
          },
          {
            name: 'Adaptive Force per 100 AP:',
            values: '6 / 7 / 8 / 9 / 10',
            valuesHTML: '6 / 7 / 8 / 9 / 10',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Adaptive Force:',
            raw: '12 / 14 / 16 / 18 / 20',
            damagetype: 'None',
            values: [12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 14 / 16 / 18 / 20',
          },
          {
            effectType: 'Damage',
            name: 'Adaptive Force per 100 bonus AD:',
            raw: '10 / 11.67 / 13.33 / 15 / 16.67',
            damagetype: 'None',
            values: [10, 11.67, 13.33, 15, 16.67],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 11.67 / 13.33 / 15 / 16.67',
          },
          {
            effectType: 'Damage',
            name: 'Adaptive Force per 100 AP:',
            raw: '6 / 7 / 8 / 9 / 10',
            damagetype: 'None',
            values: [6, 7, 8, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10',
          },
        ],
      },
      {
        icon: '/wiki/images/You_and_Me!.png',
        description:
          "Active: Yuumi  channels for 0.25 seconds, then  dashes to the target allied champion and  attaches to them upon arrival. While attached, Yuumi is  untargetable (except from  turrets and inbound  projectiles) and casts her spells from the Anchor's position. The cooldown starts upon completing the  channel. You and Me! can be recast after 0.5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 0.<small>25</small> seconds, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="The Anchor">allied champion</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaches</a></span> to them upon arrival. While attached, <b>Yuumi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> (except from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and inbound <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>) and casts her spells from the <i>Anchor\'s</i> position. The cooldown starts upon completing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span>. <i>You and Me!</i> can be recast after 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "While attached, Yuumi is  untargetable (except from  turrets and inbound  projectiles) and casts her spells from the Anchor's position",
            values: 0,
            user: 'none',
            units: '',
            unitsText: "and casts her spells from the Anchor's position",
            pre: 'While attached, Yuumi is  untargetable',
            post: "and casts her spells from the Anchor's position",
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'except from  turrets and inbound  projectiles',
                pre: 'except from  turrets and inbound  projectiles',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Yuumi will be  knocked down by any  immobilizing or  polymorphing crowd control during the dash.',
        descriptionHTML:
          '<i><b>Yuumi</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Change_of_Plan.png',
        description:
          'Recast: Yuumi switches her Anchor to the target allied champion and  attaches to them, refreshing the recast. She will detach automatically if her Anchor dies or under certain circumstances. If recast without a valid target, Yuumi will detach from her Anchor and  dash 250-units in the target direction, placing You and Me! on a  0.25-second cooldown if it is not already on cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Yuumi</b> switches her <i>Anchor</i> to the target allied champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaches</a></span> to them, refreshing the recast. She will <i>detach</i> automatically if her <i>Anchor</i> dies or under <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="In the notes below">certain circumstances</span>. If recast without a valid target, <b>Yuumi</b> will <i>detach</i> from her <i>Anchor</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> 250-units in the target direction, placing <i>You and Me!</i> on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>25</small></span>-second cooldown if it is not already on cooldown.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'If recast without a valid target, Yuumi will detach from her Anchor and  dash 250-units in the target direction, placing You and Me! on a  0.25-second cooldown if it is not already on cooldown.',
            damagetype: 'None',
            values: 2,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'recast without a valid target, Yuumi will detach from her Anchor and  dash 250-units in the target direction, placing You and Me! on a  0.25-second cooldown if it is not already on cooldown.',
            pre: 'If recast without a valid target, Yuumi will detach from her Anchor and  dash 250-units in the target direction, placing You and Me! on a  0.25-second cooldown if it is not already on cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Allies',
    notes:
      '* <b>Yuumi</b> will track the target if they change locations.\n<ul><li><ul><li>She will not stop tracking the target until she reaches them, as there is no maximum tracking distance.</li></ul></li>\n<li>The 0.<small>5</small>-second cooldown will be incurred whenever <b>Yuumi</b> attaches to an <i>Anchor</i>, whether by the active or the recast.</li>\n<li>If the target moves <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2000</span> or more units away during the dash, it will be interrupted and <b>You and Me!</b> will be placed on full cooldown.</li>\n<li>The ability name for the recast is <i>Change of Plan</i>.</li>\n<li><i>You and Me!</i> does not count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL" title="Kassadin"><img alt="Kassadin" src="/wiki/images/Kassadin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL" title="Kassadin/LoL">Kassadin</a></span></span> also cannot gain stacks for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span> from <b>Yuumi</b> casting spells while she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li></ul></li>\n<li><b>Yuumi</b> can channel the <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eye of the Herald" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald"><img alt="Eye of the Herald" src="/wiki/images/Eye_of_the_Herald_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald">Eye of the Herald</a></span></span> while attached.</li>\n<li>The <span style="color: #7A6DFF; white-space:normal">ability power</span> multiplier is <b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks additively"><a href="/wiki/Stacking#Stacks_additively" title="Stacking#Stacks additively"><img alt="Additive stacking icon.png" src="/wiki/images/Additive_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_additively" title="Stacking">additive</a></span></b> with other <span style="color: #7A6DFF; white-space:normal">ability power</span> multipliers, like from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rabadon\'s Deathcap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rabadon%27s_Deathcap" title="Rabadon\'s Deathcap"><img alt="Rabadon\'s Deathcap" src="/wiki/images/Rabadon%27s_Deathcap_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rabadon%27s_Deathcap" title="Rabadon\'s Deathcap">Rabadon\'s Deathcap</a></span></span> or <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Dragon Slayer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon_Slayer" title="Infernal Might"><img alt="Infernal Might" src="/wiki/images/Dragon_Slayer_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon_Slayer" title="Dragon Slayer">Infernal Might</a></span></span>.</li>\n<li>The <span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span> multiplier is <b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks additively"><a href="/wiki/Stacking#Stacks_additively" title="Stacking#Stacks additively"><img alt="Additive stacking icon.png" src="/wiki/images/Additive_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_additively" title="Stacking">additive</a></span></b> with other sources of <span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span> multipliers, like from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Unseen Predator" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Unseen Predator"><img alt="Unseen Predator" src="/wiki/images/Rengar_Unseen_Predator.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Rengar/LoL">Unseen Predator</a></span></span> and is <b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">multiplicative</a></span></b> with <span style="color:orange; white-space:normal"><b>total</b> attack damage</span> multipliers, like from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Whisper" title="Whisper"><img alt="Whisper" src="/wiki/images/Jhin_Whisper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Whisper" title="Jhin/LoL">Whisper</a></span></span> or <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Dragon Slayer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon_Slayer" title="Infernal Might"><img alt="Infernal Might" src="/wiki/images/Dragon_Slayer_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon_Slayer" title="Dragon Slayer">Infernal Might</a></span></span>.</li>\n<li><b>Yuumi</b> will automatically detach in the following circumstances:\n<ul><li>When her <i>Anchor</i> starts a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> channel.</li>\n<li>After the <i>Anchor</i> completes a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> channel.</li>\n<li>When she or her <i>Anchor</i> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>Her <i>Anchor</i> is sent to the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span>.</li>\n<li>She is pulled by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Fate\'s Call" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Fate\'s Call"><img alt="Fate\'s Call" src="/wiki/images/Kalista_Fate%27s_Call.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Kalista/LoL">Fate\'s Call</a></span></span>.</li></ul></li>\n<li><b>Yuumi</b> can dash to targetable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> allies (currently only <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL" title="Sion\'s"><img alt="Sion\'s" src="/wiki/images/Sion_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL" title="Sion/LoL">Sion\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-ability="Glory in Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Glory in Death"><img alt="Glory in Death" src="/wiki/images/Sion_Glory_in_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Sion/LoL">Glory in Death</a></span></span></span>), but she cannot attach when she reaches them.\n<ul><li>The same goes for allies channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>.</li></ul></li>\n<li>While attached to the <i>Anchor</i>, <b>Yuumi</b> is considered in being at her <i>Anchor\'s</i> position, regardless of where she is visually placed near them. For example, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> shots will appear as if they were hitting the <i>Anchor</i>, but in reality they\'re actually hitting <b>Yuumi</b>.\n<ul><li>However, for the purposes of <i>You and Me!</i>, such as casting it or being unattached for other reasons, <b>Yuumi</b> will be in the position where she visually is. For example, when she is in the blue team, dashing to a north-east ally is considerably slower than dashing to a south-west ally.</li></ul></li>\n<li>Her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> aggression transfers to the <i>Anchor</i>.</li>\n<li>Enemies gain an assist on <b>Yuumi</b> if they damaged the <i>Anchor</i>.</li>\n<li><b>Yuumi</b> will <b>always</b> be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> if her <i>Anchor</i> can be seen, and she will <b>always</b> not be visible if her <i>Anchor</i> cannot be seen. These rules apply regardless of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> effects and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span>.</li>\n<li><b>Yuumi</b> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanish</a></span> if her <i>Anchor</i> does.</li>\n<li>If <b>Yuumi</b> is on the blue team, she will remain attached on the southwest side; if <b>Yuumi</b> is on the red team, she will remain on the northeast. While channeling <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Final Chapter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Final_Chapter" title="Final Chapter"><img alt="Final Chapter" src="/wiki/images/Yuumi_Final_Chapter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Final_Chapter" title="Yuumi/LoL">Final Chapter</a></span></span>, she will be behind her <i>Anchor</i>.</li>\n<li><b>Yuumi</b> doesn\'t <i>detach</i> instantly when her <i>Anchor</i> dies. There\'s a small grace period in which she can recast <i>You and Me!</i> to attach to another champion without the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span>.</li>\n<li>The <a href="/wiki/Summoner" title="Summoner">player\'s</a> screen will briefly flash red if <b>Yuumi</b> is affected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounding</a></span> effect, or if she forcibly detaches from her <i>Anchor</i>.</li>\n<li>The <i>Anchor\'s</i> <a href="/wiki/Health_bar" title="Health bar">health bar</a> will have a different frame to indicate the <i>attached</i> status:</li></ul>\n<div class="center"><div class="floatnone"><a href="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Yuumi_Health_Bar.png/revision/latest?cb=20200427081427" class="image"><img alt="Yuumi Health Bar.png" src="/wiki/images/Yuumi_Health_Bar.png" decoding="async" loading="lazy" width="200" height="48" class="lazyload"></a></div></div>\n<ul><li>The following table refers for interactions while <b>Yuumi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li>The following table refers for interactions while <b>Yuumi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Yuumi_Original_W_3.ogg   "Book, meet new friend!"',
  },
  Zoomies: {
    name: 'Zoomies',
    display_name: 'Zoomies',
    champion: 'Yuumi',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'YuumiE.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60 <span style="color: #0099CC; white-space:normal">(+&nbsp;12% <b>maximum</b> mana)</span>',
    costtype: 'Mana',
    cooldown: '12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL" title="Yuumi"><img alt="Yuumi" src="/wiki/images/Yuumi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL" title="Yuumi/LoL">Yuumi</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and gains <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a short time.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> <i>Zoomies</i> affects the <i>Anchor</i> instead of <b>Yuumi</b>.',
    ],
    description: [
      {
        icon: '/wiki/images/Zoomies.png',
        description:
          'Active: Yuumi  heals herself and gains  20% bonus movement speed and  bonus attack speed for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Yuumi  heals herself and gains  20% bonus movement speed and  bonus attack speed for 3 seconds.',
            healType: 'BonusHealth',
            values: 2,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText:
              'bonus movement speed and  bonus attack speed for 3 seconds. heals herself and gains  20',
            pre: 'Yuumi  heals herself and gains  20% bonus movement speed and  bonus attack speed for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Heal:',
            values: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
            valuesHTML:
              '70 / 90 / 110 / 130 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
          {
            name: 'Bonus Attack Speed:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
            healType: 'DrainEffect',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
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
        icon: '/wiki/images/undefined',
        description:
          'Attached Bonus: Zoomies affects the Anchor instead of Yuumi.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Attached"><img alt="Attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">Attached</a></span></span> Bonus:</b></span> <i>Zoomies</i> affects the <i>Anchor</i> instead of <b>Yuumi</b>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self / Allies',
    notes:
      '* Considering <b>Yuumi\'s</b> <span style="color: #0099CC; white-space:normal"><b>base</b> mana</span>, <i>Zoomies\' </i>mana cost is increased by <b>at least</b> <span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="(400+45*(x-1)*(0.7025+0.0175*(x-1)))*0.15" data-bot_values="60;64.86;69.96;75.29;80.86;86.66;92.7;98.98;105.5;112.25;119.23;126.45;133.91;141.61;149.54;157.71;166.11;174.75" data-top_values="">60 − 174.<small>75</small> (based on level)</span></span>.',
  },
  'Final Chapter': {
    name: 'Final Chapter',
    display_name: 'Final Chapter',
    champion: 'Yuumi',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'YuumiR.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 450',
    speed: '3000',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">110 / 105 / 100 / 95 / 90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL" title="Yuumi"><img alt="Yuumi" src="/wiki/images/Yuumi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL" title="Yuumi/LoL">Yuumi</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> up to a few seconds, launching 7 waves in the target direction that deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      'An enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by three waves will be briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
      '<b>Yuumi</b> can move during <i>Final Chapter</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Final_Chapter.png',
        description:
          'Active: Yuumi and Book  channel for up to 3.5 seconds, launching 7 waves in the target direction that each deal magic damage to enemies hit. Enemy  champions hit take only 50% damage from subsequent waves, and when they are struck by three waves, they become  rooted for 1.25 seconds. This may occur only once per target.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yuumi</b> and <i>Book</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> for up to 3.<small>5</small> seconds, launching 7 waves in the target direction that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit take only 50% damage from subsequent waves, and when they are struck by three waves, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>25</small> seconds. This may occur only once per target.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Yuumi and Book  channel for up to 3.5 seconds, launching 7 waves in the target direction that each deal magic damage to enemies hit',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'and Book  channel for up to 3.5 seconds, launching 7 waves in the target direction that each deal magic damage to enemies hit',
            pre: 'Yuumi and Book  channel for up to 3.5 seconds, launching 7 waves in the target direction that each deal magic damage to enemies hit',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemy  champions hit take only 50% damage from subsequent waves, and when they are struck by three waves, they become  rooted for 1.25 seconds',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage from subsequent waves, and when they are struck by three waves, they become  rooted for 1.25 seconds champions hit take only 50',
            pre: 'Enemy  champions hit take only 50% damage from subsequent waves, and when they are struck by three waves, they become  rooted for 1.25 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Wave:',
            values: '60 / 70 / 80 / 90 / 100 (+ 20% AP)',
            valuesHTML:
              '60 / 70 / 80 / 90 / 100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Wave:',
            raw: '60 / 70 / 80 / 90 / 100 (+ 20% AP)',
            damagetype: 'Magic',
            values: [60, 70, 80, 90, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 70 / 80 / 90 / 100',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <b>Yuumi</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for the channel and, if not presently attached with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="You and Me!"><img alt="You and Me!" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">You and Me!</a></span></span>, will remain ghosted until she attaches and detaches again.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>While <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="attached"><img alt="attached" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">attached</a></span></span>, <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Cloud Dragon Soul" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cloud_Dragon_Soul" title="Cloud Dragon Soul"><img alt="Cloud Dragon Soul" src="/wiki/images/Cloud_Dragon_Soul_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cloud_Dragon_Soul" class="mw-redirect" title="Cloud Dragon Soul">Cloud Dragon Soul</a></span></span> will not activate until <b>Yuumi</b> detaches.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block a single instance of damage.</li>\n<li>Enemies hit by three waves of <i>Final Chapter</i> have a marker placed upon them for 6 seconds. This marker prevents the target from becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> again until its duration ends.</li>\n<li><b>Yuumi\'s</b> facing direction during the channel is considered to be in <i>Final Chapter\'s</i> target direction.\n<ul><li>Using <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> during the channel will always cause <b>Yuumi</b> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> in the target direction of <i>Final Chapter</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>The following table refers for interactions while <b>Yuumi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Prowling Projectile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Prowling_Projectile" title="Prowling Projectile"><img alt="Prowling Projectile" src="/wiki/images/Yuumi_Prowling_Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Prowling_Projectile" title="Yuumi/LoL">Prowling Projectile</a></span></span> is disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="You and Me!"><img alt="You and Me!" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">You and Me!</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="Zoomies" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#Zoomies" title="Zoomies"><img alt="Zoomies" src="/wiki/images/Yuumi_Zoomies.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#Zoomies" title="Yuumi/LoL">Zoomies</a></span></span> are usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Yuumi_Original_R_4.ogg   "THIS IS MY FAVORITE CHAPTER!!"',
  },
} satisfies { [skillName in string]: SkillData };
