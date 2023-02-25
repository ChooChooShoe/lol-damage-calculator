import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Quinn';

export default {
  Harrier: {
    name: 'Harrier',
    display_name: 'Harrier',
    champion: 'Quinn',
    skill: 'I',
    image: {
      full: 'Quinn_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '525',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Quinn\'s"><img alt="Quinn\'s" src="/wiki/images/Quinn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Quinn\'s</a></span></span> damaging abilities mark enemies with <i>Vulnerable</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> them for a few seconds. Periodically, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Valor" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Valor" title="Valor">Valor</a></span></span> marks a nearby enemy with <i>Vulnerable</i>.',
      '<b>Quinn\'s</b> next basic attack against a <i>Vulnerable</i> target consumes the mark to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Harrier.png',
        description:
          "Innate: Quinn's  Blinding Assault against the primary target,  Vault, and  Skystrike mark enemies hit with Vulnerable for 4 seconds, during which they are  revealed. If no Vulnerable target exists for 1 second,  Valor automatically marks a nearby  visible enemy. He cannot do this again for 8 − 2.93 (based on critical strike chance) seconds after the mark expired or was consumed or overwritten by another mark.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Quinn\'s</b> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Blinding Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Blinding Assault"><img alt="Blinding Assault" src="/wiki/images/Quinn_Blinding_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Quinn/LoL">Blinding Assault</a></span></span> against the primary target, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Vault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Vault" title="Vault"><img alt="Vault" src="/wiki/images/Quinn_Vault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Vault" title="Quinn/LoL">Vault</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span> mark enemies hit with <i>Vulnerable</i> for 4 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. If no <i>Vulnerable</i> target exists for 1 second, <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span></b> automatically marks a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy. He cannot do this again for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="8*(0.99^critical strike chance %)" data-bot_values="8;7.24;6.54;5.92;5.35;4.84;4.38;3.96;3.58;3.24;2.93" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-top_key="%">8 − 2.<small>93</small> (based on critical strike chance)</span> seconds after the mark expired or was consumed or overwritten by another mark.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: "Quinn's  Blinding Assault against the primary target,  Vault, and  Skystrike mark enemies hit with Vulnerable for 4 seconds, during which they are  revealed",
            increasedStat: 'kindredMarks',
            values: 4,
            units: '',
            unitsText:
              'Blinding Assault against the primary target,  Vault, and  Skystrike mark enemies hit with Vulnerable for 4 seconds, during which they are  revealed',
            pre: "Quinn's  Blinding Assault against the primary target,  Vault, and  Skystrike mark enemies hit with Vulnerable for 4 seconds, during which they are  revealed",
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If no Vulnerable target exists for 1 second,  Valor automatically marks a nearby  visible enemy',
            values: 1,
            units: 'kindredMarks',
            unitsText:
              'no Vulnerable target exists for 1 second,  Valor automatically marks a nearby  visible enemy',
            pre: 'If no Vulnerable target exists for 1 second,  Valor automatically marks a nearby  visible enemy',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'He cannot do this again for 8 − 2.93 (based on critical strike chance) seconds after the mark expired or was consumed or overwritten by another mark.',
            increasedStat: 'kindredMarks',
            values: [8, 2.93],
            basedOn: 'critical strike chance',
            units: '',
            unitsText:
              'seconds after the mark expired or was consumed or overwritten by another mark.',
            pre: 'He cannot do this again for 8 − 2.93',
            post: 'seconds after the mark expired or was consumed or overwritten by another mark.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Quinn's basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 − 95 (based on level) (+ 16% − 50% (based on level) AD) bonus physical damage.",
        descriptionHTML:
          '<b>Quinn\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> against <i>Vulnerable</i> targets are empowered to consume the mark to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FF8C34;" data-start="10;" data-finish="95;" data-bot_values="10;15;20;25;30;35;40;45;50;55;60;65;70;75;80;85;90;95" data-top_values="">10 − 95 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="16;" data-finish="50;" data-bot_values="16;18;20;22;24;26;28;30;32;34;36;38;40;42;44;46;48;50" data-top_values="" data-bot_key="%">16% − 50% (based on level)</span> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Quinn's basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 − 95 (based on level) (+ 16% − 50% (based on level) AD) bonus physical damage.",
            values: [
              10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85,
              90, 95,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage.',
            pre: "Quinn's basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 − 95",
            post: 'bonus physical damage.',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 16% − 50%',
                post: 'AD',
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
          'While  Behind Enemy Lines is active, Harrier is disabled and all Vulnerable marks are removed.',
        descriptionHTML:
          'While <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Behind Enemy Lines" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Behind Enemy Lines"><img alt="Behind Enemy Lines" src="/wiki/images/Quinn_Behind_Enemy_Lines.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Quinn/LoL">Behind Enemy Lines</a></span></span></i> is active, <i>Harrier</i> is disabled and all <i>Vulnerable</i> marks are removed.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* If a mark applied by an ability is overwritten, consumed, or timed out, <i>Harrier</i> goes on a 1-second cooldown if it\'s not already on cooldown.\n<ul><li><i>Harrier\'s</i> targeting priority:\n<ol><li>Last unit hit (if it was a small minion it appears to select a different target).</li>\n<li>Lowest-health enemy champion.</li>\n<li>Lowest-health enemy minion.</li></ol></li>\n<li><i>Harrier</i> is consumed even if it is parried, the attack is negated in any case.</li>\n<li><i>Harrier</i> will not mark enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> while <b>Quinn</b> is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span>, but will mark enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.</li></ul>',
    video: 'Quinn IVideo.ogv',
  },
  'Blinding Assault': {
    name: 'Blinding Assault',
    display_name: 'Blinding Assault',
    champion: 'Quinn',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'QuinnQ.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1050',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">210</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1550',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '11 / 10.<small>5</small> / 10 / 9.<small>5</small> / 9',
    customlabel: 'Sight Reduction',
    custominfo:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reduces sight radius to this number">350</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Quinn"><img alt="Quinn" src="/wiki/images/Quinn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Quinn</a></span></span> sends <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span> in the target direction who stops upon hitting an enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> all nearby enemies.',
      'If the primary target was a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, they become briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighted</a></span>, otherwise they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarmed</a></span> instead.',
    ],
    description: [
      {
        icon: '/wiki/images/Blinding_Assault.png',
        description:
          'Active: Quinn sends  Valor in the target direction who stops upon hitting an enemy, marking them as  Vulnerable and dealing physical damage to all nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> sends <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span></b> in the target direction who stops upon hitting an enemy, marking them as <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i> and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '20 / 45 / 70 / 95 / 120 (+ 80 / 90 / 100 / 110 / 120% AD) (+ 50% AP)',
            valuesHTML:
              '20 / 45 / 70 / 95 / 120 <span style="color:orange; white-space:normal">(+&nbsp;80 / 90 / 100 / 110 / 120% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 80 / 90 / 100 / 110 / 120% AD) (+ 50% AP)',
            damagetype: 'Physical',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: [80, 90, 100, 110, 120],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80 / 90 / 100 / 110 / 120% AD',
              },
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the primary target was a  champion, they become  nearsighted for 1.75 seconds, otherwise they are  disarmed instead.',
        descriptionHTML:
          'If the primary target was a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighted</a></span> for 1.<small>75</small> seconds, otherwise they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarmed</a></span> instead.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If the primary target was a  champion, they become  nearsighted for 1.75 seconds, otherwise they are  disarmed instead.',
            damagetype: 'None',
            values: 1,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'the primary target was a  champion, they become  nearsighted for 1.75 seconds, otherwise they are  disarmed instead.',
            pre: 'If the primary target was a  champion, they become  nearsighted for 1.75 seconds, otherwise they are  disarmed instead.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Blinding Assault\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> will persist through <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span>.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Quinn_Original_Q_0.ogg   "Gouge \'em, Valor!"',
    video: 'Quinn QVideo.ogv',
  },
  'Heightened Senses': {
    name: 'Heightened Senses',
    display_name: 'Heightened Senses',
    champion: 'Quinn',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'QuinnW.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '2100',
    cast_time: 'none',
    cooldown: '50 / 45 / 40 / 35 / 30',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Attacking a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span> target or consuming a mark grants <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Quinn"><img alt="Quinn" src="/wiki/images/Quinn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Quinn</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the surrounding area for a short time, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> enemies detected.',
    ],
    description: [
      {
        description:
          'Passive: Whenever Quinn uses a basic attack on-attack against a  Vulnerable target or consumes their mark, she gains  bonus attack speed and  bonus movement speed for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Quinn</b> uses a basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> against a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i> target or consumes their mark, she gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: 'Whenever Quinn uses a basic attack on-attack against a  Vulnerable target or consumes their mark, she gains  bonus attack speed and  bonus movement speed for 2 seconds.',
            increasedStat: 'kindredMarks',
            values: 2,
            units: '',
            unitsText:
              'Quinn uses a basic attack on-attack against a  Vulnerable target or consumes their mark, she gains  bonus attack speed and  bonus movement speed for 2 seconds.',
            pre: 'Whenever Quinn uses a basic attack on-attack against a  Vulnerable target or consumes their mark, she gains  bonus attack speed and  bonus movement speed for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '28 / 36 / 44 / 52 / 60%',
            valuesHTML: '28 / 36 / 44 / 52 / 60%',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '28 / 36 / 44 / 52 / 60%',
            values: [28, 36, 44, 52, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '28 / 36 / 44 / 52 / 60%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
      },
      {
        icon: '/wiki/images/Heightened_Senses.png',
        description:
          'Active:  Valor grants  sight of the surrounding area for 2 seconds and  reveals enemy champions within for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the surrounding area for 2 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> enemy champions within for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Valor grants  sight of the surrounding area for 2 seconds and  reveals enemy champions within for the same duration.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'grants  sight of the surrounding area for 2 seconds and  reveals enemy champions within for the same duration.',
            pre: 'Valor grants  sight of the surrounding area for 2 seconds and  reveals enemy champions within for the same duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    spellshield: false,
    notes: '* No additional details.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Quinn_Original_W_1.ogg   "Eyes in the sky."',
    video: 'Quinn WVideo.ogv',
  },
  Vault: {
    name: 'Vault',
    display_name: 'Vault',
    champion: 'Quinn',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'QuinnE.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '600',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial dash speed, estimated">2500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Second dash speed, estimated">850</span>',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Quinn"><img alt="Quinn" src="/wiki/images/Quinn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Quinn</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, marking them as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span>, and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them. She then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> backward.',
    ],
    description: [
      {
        icon: '/wiki/images/Vault.png',
        description:
          'Active: Quinn  dashes to the target enemy, marking them as  Vulnerable, dealing physical damage,  knocking them back, though not through terrain, and  slowing them by 50% decaying over 1.5 seconds. She then  leaps back 525 units away from them.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy, marking them as <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, though not through terrain, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 50% decaying over 1.<small>5</small> seconds. She then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps back</a></span> 525 units away from them.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Quinn  dashes to the target enemy, marking them as  Vulnerable, dealing physical damage,  knocking them back, though not through terrain, and  slowing them by 50% decaying over 1.5 seconds',
            damagetype: 'Physical',
            values: 5,
            valuesIsPercent: true,
            units: 'kindredMarks',
            unitsText:
              'decaying over 1.5 seconds dashes to the target enemy, marking them as  Vulnerable, dealing physical damage,  knocking them back, though not through terrain, and  slowing them by 50',
            pre: 'Quinn  dashes to the target enemy, marking them as  Vulnerable, dealing physical damage,  knocking them back, though not through terrain, and  slowing them by 50% decaying over 1.5 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'She then  leaps back 525 units away from them.',
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText: 'then  leaps back 525 units away from them.',
            pre: 'She then  leaps back 525 units away from them.',
          },
        ],
        leveling: [
          {
            name: 'Physical damage:',
            values: '40 / 70 / 100 / 130 / 160 (+ 20% bonus AD)',
            valuesHTML:
              '40 / 70 / 100 / 130 / 160 <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '40 / 70 / 100 / 130 / 160 (+ 20% bonus AD)',
            damagetype: 'Physical',
            values: [40, 70, 100, 130, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 70 / 100 / 130 / 160',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Heightened Senses can be cast during either of the dashes.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Heightened Senses" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Heightened_Senses" title="Heightened Senses"><img alt="Heightened Senses" src="/wiki/images/Quinn_Heightened_Senses.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Heightened_Senses" title="Quinn/LoL">Heightened Senses</a></span></span> can be cast during either of the dashes.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <b>Quinn</b> will track the target if they change locations.\n<ul><li><ul><li>She will dash to the target\'s previous location without applying <i>Vault\'s</i> effects if the target is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1200</span> units.</li></ul></li>\n<li><b>Quinn</b> will automatically attempt to attack the target once she completes <i>Vault</i>.</li>\n<li>The target will turn to face the opposite direction after being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span>.</li>\n<li>Unlike its constant cast range <i>Vault\'s</i> bounce\'s can vary to allow <b>Quinn</b> to close or to make a gap between herself and the target (depending on casting position) or even to jump through a wall (if there is enough landing room on the other side).</li>\n<li><i>Vault</i> also interrupts basic attacks with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windups</a></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
    video: 'Quinn EVideo.ogv',
  },
  'Behind Enemy Lines': {
    name: 'Behind Enemy Lines',
    display_name: 'Behind Enemy Lines',
    champion: 'Quinn',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'QuinnR.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>25</small>',
    cost: '100 / 75 / 50 / 25 / 0',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">3</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Quinn"><img alt="Quinn" src="/wiki/images/Quinn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Quinn</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time to pair up with <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span>. They then become united, increasing her <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span>.',
      'The duo lose the movement speed boost upon taking non-minion damage, and disband upon being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>.',
      'While united, <b>Quinn</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Behind_Enemy_Lines.png',
        description:
          'Active: Quinn  channels for 2 seconds, signaling  Valor to pair up. Upon completion, he picks her up and they unite, increasing her  total movement speed, granting her  ghosting, and allowing her to cast  Skystrike. Behind Enemy Lines can be recast after 0.5 seconds during the channel.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 2 seconds, signaling <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span></b> to pair up. Upon completion, he picks her up and they unite, increasing her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Increases base movement as well as bonus movement speed"><b>total</b> movement speed</span></span></span>, granting her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, and allowing her to cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span></i>. <i>Behind Enemy Lines</i> can be recast after 0.<small>5</small> seconds during the channel.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Quinn  channels for 2 seconds, signaling  Valor to pair up',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'channels for 2 seconds, signaling  Valor to pair up',
            pre: 'Quinn  channels for 2 seconds, signaling  Valor to pair up',
          },
        ],
        leveling: [
          {
            name: 'Total Movement Speed Increase:',
            values: '70 / 85 / 100 / 115 / 130%',
            valuesHTML: '70 / 85 / 100 / 115 / 130%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Total Movement Speed Increase:',
            raw: '70 / 85 / 100 / 115 / 130%',
            values: [70, 85, 100, 115, 130],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 85 / 100 / 115 / 130%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Taking damage from non- minions while Behind Enemy Lines is active or while Quinn is  channeling the ability causes her to lose the bonus total movement speed for 3 seconds. Becoming  immobilized,  grounded, or  silenced ends Behind Enemy Lines immediately and puts it on  cooldown without performing  Skystrike.',
        descriptionHTML:
          'Taking damage from non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> while <i>Behind Enemy Lines</i> is active or while <b>Quinn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> the ability causes her to lose the <span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span> for 3 seconds. Becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> ends <i>Behind Enemy Lines</i> immediately and puts it on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> without performing <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Taking damage from non- minions while Behind Enemy Lines is active or while Quinn is  channeling the ability causes her to lose the bonus total movement speed for 3 seconds',
            damagetype: 'None',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'damage from non- minions while Behind Enemy Lines is active or while Quinn is  channeling the ability causes her to lose the bonus total movement speed for 3 seconds',
            pre: 'Taking damage from non- minions while Behind Enemy Lines is active or while Quinn is  channeling the ability causes her to lose the bonus total movement speed for 3 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Once Behind Enemy Lines has been learned, respawning or returning to the allied summoning platform will spawn  Valor instantly.',
        descriptionHTML:
          'Once <i>Behind Enemy Lines</i> has been learned, <a href="/wiki/Death" title="Death">respawning</a> or returning to the allied <a href="/wiki/Spawn" title="Spawn">summoning platform</a> will spawn <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span></b> instantly.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Quinn cancels the channel, placing Behind Enemy Lines on cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Quinn</b> cancels the channel, placing <i>Behind Enemy Lines</i> on cooldown.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* Taking damage from non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> removes the bonus movement speed buff temporarily by suppressing it with the status effect of a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.\n<ul><li><i>Behind Enemy Lines</i> does not refund its <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> if the channel was canceled via recast.\n<ul><li>The only exception is if <b>Quinn\'s</b> <span style="color: #0099CC; white-space:normal">mana</span> falls below the <span style="color: #0099CC; white-space:normal">mana cost</span>, in which case she is granted enough <span style="color: #0099CC; white-space:normal">mana</span> back (the equal amount needed) to be able to cast <i>Behind Enemy Lines</i> again.</li></ul></li>\n<li><a href="/wiki/Death" title="Death">Respawning</a> or returning to the <a href="/wiki/Spawn" title="Spawn">summoning platform</a> will not spawn <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span></b> if <i>Behind Enemy Lines</i> is on cooldown.</li>\n<li>If <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span></b> is spawned by <a href="/wiki/Death" title="Death">respawning</a> or returning to the <a href="/wiki/Spawn" title="Spawn">summoning platform</a>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span> will be disabled from being manually cast for 2.<small>5</small> seconds upon uniting. However, it will still automatically activate upon declaring a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Blinding Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Blinding Assault"><img alt="Blinding Assault" src="/wiki/images/Quinn_Blinding_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Quinn/LoL">Blinding Assault</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Vault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Vault" title="Vault"><img alt="Vault" src="/wiki/images/Quinn_Vault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Vault" title="Quinn/LoL">Vault</a></span></span>.</li>\n<li><i>Behind Enemy Lines</i> ends immediately without <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span> being cast if she enters or is inside the enemy <a href="/wiki/Fountain" class="mw-redirect" title="Fountain">fountain</a>. The ability will go on full <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.\n<ul><li><b>Quinn</b> will also spawn <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span></b> when entering the enemy fountain but she will instantly lose him afterwards.</li></ul></li>\n<li>Self-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizations</a></span> such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span> also count for ending <i>Behind Enemy Lines</i>.</li>\n<li>The following table refers for interactions while <b>Quinn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:\n<ul><li><i>Behind Enemy Lines</i> is not a <a href="/wiki/Channel#Movement_Channels" title="Channel">movement channel</a>, and so will not be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">ground</a></span>.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Quinn_Original_R_1.ogg   "Valor, to me!"',
    video: 'Quinn RVideo.ogv',
  },
  Skystrike: {
    name: 'Skystrike',
    display_name: 'Skystrike',
    champion: 'Quinn',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'QuinnR.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '700',
    cast_time: 'none',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Quinn"><img alt="Quinn" src="/wiki/images/Quinn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Quinn</a></span></span> disbands from <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL" title="Quinn/LoL">Valor</a></span></span> and rains arrows down around her, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
      "<b>Quinn's</b> attacks and damaging abilities automatically activate <i>Skystrike</i>.",
    ],
    description: [
      {
        icon: '/wiki/images/Skystrike.png',
        description:
          "Active: Quinn detaches from Valor, ending  Behind Enemy Lines' effects and raining arrows down around her, dealing 70% AD physical damage to nearby enemies and marking them as  Vulnerable.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> detaches from <b>Valor</b>, ending <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Behind Enemy Lines" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Behind Enemy Lines\'"><img alt="Behind Enemy Lines\'" src="/wiki/images/Quinn_Behind_Enemy_Lines.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Quinn/LoL">Behind Enemy Lines\'</a></span></span></i> effects and raining arrows down around her, dealing <span style="color:orange; white-space:normal">70% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and marking them as <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "Quinn detaches from Valor, ending  Behind Enemy Lines' effects and raining arrows down around her, dealing 70% AD physical damage to nearby enemies and marking them as  Vulnerable.",
            damagetype: 'Physical',
            values: 7,
            valuesIsPercent: true,
            units: 'kindredMarks',
            unitsText:
              "AD physical damage to nearby enemies and marking them as  Vulnerable.detaches from Valor, ending  Behind Enemy Lines' effects and raining arrows down around her, dealing 70",
            pre: "Quinn detaches from Valor, ending  Behind Enemy Lines' effects and raining arrows down around her, dealing 70% AD physical damage to nearby enemies and marking them as  Vulnerable.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Declaring a basic attack or casting  Blinding Assault or  Vault during  Behind Enemy Lines automatically activates Skystrike.',
        descriptionHTML:
          'Declaring a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Blinding Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Blinding Assault"><img alt="Blinding Assault" src="/wiki/images/Quinn_Blinding_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Quinn/LoL">Blinding Assault</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Vault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Vault" title="Vault"><img alt="Vault" src="/wiki/images/Quinn_Vault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Vault" title="Quinn/LoL">Vault</a></span></span></i> during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Behind Enemy Lines" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Behind Enemy Lines"><img alt="Behind Enemy Lines" src="/wiki/images/Quinn_Behind_Enemy_Lines.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Quinn/LoL">Behind Enemy Lines</a></span></span></i> automatically activates <i>Skystrike</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* If <b>Quinn</b> uses <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Vault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Vault" title="Vault"><img alt="Vault" src="/wiki/images/Quinn_Vault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Vault" title="Quinn/LoL">Vault</a></span></span> while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Behind Enemy Lines" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Behind Enemy Lines"><img alt="Behind Enemy Lines" src="/wiki/images/Quinn_Behind_Enemy_Lines.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Quinn/LoL">Behind Enemy Lines</a></span></span> is active, <i>Skystrike</i> will activate at her target\'s location after she bounces back.',
  },
} satisfies { [skillName in string]: SkillData };
