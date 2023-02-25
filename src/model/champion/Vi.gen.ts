import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Vi';

export default {
  'Blast Shield': {
    name: 'Blast Shield',
    display_name: 'Blast Shield',
    champion: 'Vi',
    skill: 'I',
    image: {
      full: 'ViPassive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="16.5-0.5 per level up to 9, where it caps" data-bot_values="16;15.5;15;14.5;14;13.5;13;12.5;12" data-top_values="">16 − 12 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL" title="Vi\'s"><img alt="Vi\'s" src="/wiki/images/Vi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL" title="Vi/LoL">Vi\'s</a></span></span> next ability hit will generate a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> by a portion of <span style="color: #1F995C; white-space:normal">her <b>maximum</b> health</span> for a short time.',
      'The cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> each time <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Denting Blows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Denting_Blows" title="Denting Blows"><img alt="Denting Blows" src="/wiki/images/Vi_Denting_Blows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Denting_Blows" title="Vi/LoL">Denting Blows</a></span></span></i> is triggered.',
    ],
    description: [
      {
        icon: '/wiki/images/Blast_Shield.png',
        description:
          "Innate: Periodically, Vi's next ability hit grants her a  shield equal to 13% of her maximum health for 3 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Vi\'s</b> next <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hit grants her a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to <span style="color: #1F995C; white-space:normal">13% of her <b>maximum</b> health</span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: "Periodically, Vi's next ability hit grants her a  shield equal to 13% of her maximum health for 3 seconds.",
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              "of her maximum health for 3 seconds.Vi's next ability hit grants her a  shield equal to 13",
            pre: "Periodically, Vi's next ability hit grants her a  shield equal to 13% of her maximum health for 3 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Blast Shield's  cooldown is reduced by 3 seconds each time  Denting Blows is consumed.",
        descriptionHTML:
          '<i>Blast Shield\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 3 seconds each time <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Denting Blows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Denting_Blows" title="Denting Blows"><img alt="Denting Blows" src="/wiki/images/Vi_Denting_Blows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Denting_Blows" title="Vi/LoL">Denting Blows</a></span></span></i> is consumed.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: "Blast Shield's  cooldown is reduced by 3 seconds each time  Denting Blows is consumed.",
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              "Shield's  cooldown is reduced by 3 seconds each time  Denting Blows is consumed.",
            pre: "Blast Shield's  cooldown is reduced by 3 seconds each time  Denting Blows is consumed.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Shield',
    notes:
      '* <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Denting Blows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Denting_Blows" title="Denting Blows"><img alt="Denting Blows" src="/wiki/images/Vi_Denting_Blows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Denting_Blows" title="Vi/LoL">Denting Blows</a></span></span></i> will not activate <i>Blast Shield</i>.',
  },
  'Vault Breaker': {
    name: 'Vault Breaker',
    display_name: 'Vault Breaker',
    champion: 'Vi',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ViQ.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '250 − 725 (based on channel time)',
    speed:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-start="1250;0" data-finish="1400;1.25" data-bot_values="1250;1265;1280;1295;1310;1325;1340;1355;1370;1385;1400" data-top_values="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1;1.125;1.25">1250 − 1400 (based on channel time)</span>',
    cast_time: 'none',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">12 / 10.<small>5</small> / 9 / 7.<small>5</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL" title="Vi"><img alt="Vi" src="/wiki/images/Vi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL" title="Vi/LoL">Vi</a></span></span> charges up to a few seconds to increase the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span>, speed, and damage of her punch. <i>Vault Breaker</i> can be recast within the duration and cancels automatically afterwards.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Vi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on charge time. Non-champions hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> towards her.',
      'She will stop upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Vault_Breaker.png',
        description:
          "Active: Vi  charges while being  slowed by 15% for up to 4 seconds to increase Vault Breaker's  range, speed, and damage over the first 1.25 seconds of the channel.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 15% for up to 4 seconds to increase <i>Vault Breaker\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span>, speed, and damage over the first 1.<small>25</small> seconds of the channel.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "Vi  charges while being  slowed by 15% for up to 4 seconds to increase Vault Breaker's  range, speed, and damage over the first 1.25 seconds of the channel.",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for up to 4 seconds to increase Vault Breaker's  range, speed, and damage over the first 1.25 seconds of the channel. charges while being  slowed by 15",
            pre: "Vi  charges while being  slowed by 15% for up to 4 seconds to increase Vault Breaker's  range, speed, and damage over the first 1.25 seconds of the channel.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Vault Breaker can be recast within the duration. If the charge completes without reactivation, Vault Breaker is cancelled and put on  full cooldown. If the charge is  interrupted, it will be put on a 3-second cooldown.',
        descriptionHTML:
          '<i>Vault Breaker</i> can be recast within the duration. If the charge completes without reactivation, <i>Vault Breaker</i> is cancelled and put on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;full</span> cooldown. If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, it will be put on a 3-second cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'If the charge is  interrupted, it will be put on a 3-second cooldown.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'the charge is  interrupted, it will be put on a 3-second cooldown.',
            pre: 'If the charge is  interrupted, it will be put on a 3-second cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Vi  dashes in the target direction to deal physical damage to enemies within her path, increased by 0% − 100% (based on channel time), and  pull all non-champions hit towards her.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Vi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies within her path, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="10% per 0.125 seconds. \'\'This is capped at 1.25 seconds.\'\'" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1;1.125;1.25" data-bot_key="%">0% − 100% (based on channel time)</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pull</a></span> all non-champions hit towards her.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values: '55 / 80 / 105 / 130 / 155 (+ 70% bonus AD)',
            valuesHTML:
              '55 / 80 / 105 / 130 / 155 <span style="color:orange; white-space:normal">(+&nbsp;70% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 70% bonus AD)',
            damagetype: 'Physical',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 70% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'She stops upon hitting an enemy  champion,  knocking them back over 0.75 seconds.',
        descriptionHTML:
          'She stops upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> over 0.<small>75</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Relentless Force and  Cease and Desist can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Relentless Force" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Relentless_Force" title="Relentless Force"><img alt="Relentless Force" src="/wiki/images/Vi_Relentless_Force.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Relentless_Force" title="Vi/LoL">Relentless Force</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Cease and Desist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Cease and Desist"><img alt="Cease and Desist" src="/wiki/images/Vi_Cease_and_Desist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Vi/LoL">Cease and Desist</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Enemies, Self',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <i>Vault Breaker\'s</i> dash range extends up to 50 units when going through a wall.\n<ul><li>Targets will be hit as soon as they come into contact with <b>Vi</b>.</li>\n<li>The knockback direction will be toward <b>Vi\'s</b> facing direction regardless of where she hit the target.</li>\n<li>Casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during the dash will cause enemies at the destination to be hit by <i>Vault Breaker</i>.\n<ul><li>As <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> updates <b>Vi\'s</b> facing direction, affected champions will be knocked back in the direction the summoner spell was cast in.</li></ul></li>\n<li><b>Vi</b> may cast spells that change her facing direction during the dash, including certain item actives and her own <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Cease and Desist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Cease and Desist"><img alt="Cease and Desist" src="/wiki/images/Vi_Cease_and_Desist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Vi/LoL">Cease and Desist</a></span></span>, to knock champions she collides with in a different direction.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>Items this is possible with include:\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span></li></ul></li>\n<li>Items that also initiate their own <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> <i>immediately</i> without delay can only redirect targets struck at <i>Vault Breaker\'s</i> maximum range. These items include:\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span></li></ul></li></ul></li>\n<li>Stuck targets (including those that block <i>Vault Breaker</i> with a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>) are briefly immune to being affected again by <i>Vault Breaker</i> from this player, for about 1.<small>25</small> seconds.</li>\n<li>The following table refers for interactions while <b>Vi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but can still use trinkets.\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  'Denting Blows': {
    name: 'Denting Blows',
    display_name: 'Denting Blows',
    champion: 'Vi',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ViW.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL" title="Vi\'s"><img alt="Vi\'s" src="/wiki/images/Vi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL" title="Vi/LoL">Vi\'s</a></span></span> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Vault Breaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vault Breaker"><img alt="Vault Breaker" src="/wiki/images/Vi_Vault_Breaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vi/LoL">Vault Breaker</a></span></span></i> apply a stack of <i>Denting Blows</i>.',
      'The third stack consumes them all to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span> and inflict <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for a few seconds. <b>Vi</b> will also gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Denting_Blows.png',
        description:
          "Passive: Vi's basic attacks  on-hit and  Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict  20% armor reduction for 4 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Vi\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Vault Breaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vault Breaker"><img alt="Vault Breaker" src="/wiki/images/Vi_Vault_Breaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vi/LoL">Vault Breaker</a></span></span></i> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Denting Blows</i> to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack consumes them all to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, capped at 300 against non-champions, and inflict <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">20% armor reduction</span></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: "Vi's basic attacks  on-hit and  Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times",
            min: 0,
            max: 3,
            description:
              "Vi's basic attacks  on-hit and  Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times",
            values: 4,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and  Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times',
            pre: "Vi's basic attacks  on-hit and  Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'The third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict  20% armor reduction for 4 seconds.',
            min: 0,
            max: 10,
            description:
              'The third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict  20% armor reduction for 4 seconds.',
            values: 3,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'armor reduction for 4 seconds.third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict  20',
            pre: 'The third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict  20% armor reduction for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values:
              "4 / 5.5 / 7 / 8.5 / 10% (+「 1% per 35 」「 2.86% per 100 」bonus AD) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">4 / 5.<small>5</small> / 7 / 8.<small>5</small> / 10% <span style="color:orange; white-space:normal">(+<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;1% per 35&nbsp;」</span><span class="flipText2">「&nbsp;2.<small>86</small>% per 100&nbsp;」</span></span><b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "4 / 5.5 / 7 / 8.5 / 10% (+「 1% per 35 」「 2.86% per 100 」bonus AD) of target's maximum health",
            healType: 'PhysicalVamp',
            values: [4, 5.5, 7, 8.5, 10],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '4 / 5.5 / 7 / 8.5 / 10%',
            post: "of target's maximum health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 35 」「 2.86undefined',
                pre: '+「 1% per 35 」「 2.86% per 100 」bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Denting_Blows_2.png',
        description:
          'After consuming Denting Blows, Vi gains  bonus attack speed for 4 seconds, which refreshes on subsequent triggers.',
        descriptionHTML:
          'After consuming <i>Denting Blows</i>, <b>Vi</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 4 seconds, which refreshes on subsequent triggers.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'After consuming Denting Blows, Vi gains  bonus attack speed for 4 seconds, which refreshes on subsequent triggers.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              'consuming Denting Blows, Vi gains  bonus attack speed for 4 seconds, which refreshes on subsequent triggers.',
            pre: 'After consuming Denting Blows, Vi gains  bonus attack speed for 4 seconds, which refreshes on subsequent triggers.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '30 / 37.5 / 45 / 52.5 / 60%',
            valuesHTML:
              '30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* The armor penetration will apply after the triggering damage.\n<ul><li>The enhanced attack applies other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects and can both <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal as well as apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> (the bonus damage cannot do either).</li>\n<li><i>Denting Blows</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> but cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> nor missed while <b>Vi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>The attacks do not affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Relentless Force': {
    name: 'Relentless Force',
    display_name: 'Relentless Force',
    champion: 'Vi',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ViE.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600',
    cast_time: 'none',
    cost: '26 / 32 / 38 / 44 / 50',
    costtype: 'Mana + 1 charge',
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts when the attack has been dealt">1</span>',
    recharge: '14 / 12.<small>5</small> / 11 / 9.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL" title="Vi\'s"><img alt="Vi\'s" src="/wiki/images/Vi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL" title="Vi/LoL">Vi\'s</a></span></span> next basic attack gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deals <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> to enemies hit in a cone.',
      '<b>Vi</b> periodically stocks a charge of <i>Relentless Force</i>, up to a maximum of 2.',
    ],
    description: [
      {
        icon: '/wiki/images/Relentless_Force_2.png',
        description:
          "Active: Vi empowers her next basic attack within 6 seconds to have an  uncancellable windup, gain  50 bonus range and trigger a blast in the target's direction that deals modified physical damage to enemies hit in a cone. Relentless Force can  critically strike for (75% +  35%) AD bonus physical damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vi</b> empowers her next basic attack within 6 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and trigger a blast in the target\'s direction that deals <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> to enemies hit in a cone. <i>Relentless Force</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: "Vi empowers her next basic attack within 6 seconds to have an  uncancellable windup, gain  50 bonus range and trigger a blast in the target's direction that deals modified physical damage to enemies hit in a cone",
            increasedStat: 'bonus_ad',
            values: 6,
            user: 'target',
            units: '',
            unitsText:
              "empowers her next basic attack within 6 seconds to have an  uncancellable windup, gain  50 bonus range and trigger a blast in the target's direction that deals modified physical damage to enemies hit in a cone",
            pre: "Vi empowers her next basic attack within 6 seconds to have an  uncancellable windup, gain  50 bonus range and trigger a blast in the target's direction that deals modified physical damage to enemies hit in a cone",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Relentless Force can  critically strike for (75% +  35%) AD bonus physical damage.',
            damagetype: 'Physical',
            values: 0,
            units: 'bonus_ad',
            unitsText: 'AD bonus physical damage.',
            pre: 'Relentless Force can  critically strike for',
            post: 'AD bonus physical damage.',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '75% +  35%',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '10 / 30 / 50 / 70 / 90 (+ 110% AD) (+ 90% AP)',
            valuesHTML:
              '10 / 30 / 50 / 70 / 90 <span style="color:orange; white-space:normal">(+&nbsp;110% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 30 / 50 / 70 / 90 (+ 110% AD) (+ 90% AP)',
            damagetype: 'Physical',
            values: [10, 30, 50, 70, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 30 / 50 / 70 / 90',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 110% AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Relentless_Force.png',
        description:
          'Vi periodically stocks a Relentless Force charge, up to a maximum of 2.',
        descriptionHTML:
          '<b>Vi</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Relentless Force</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Vi periodically stocks a Relentless Force charge, up to a maximum of 2.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Relentless Force charge, up to a maximum of 2.',
            pre: 'Vi periodically stocks a Relentless Force charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Relentless Force  resets Vi's basic attack timer.",
        descriptionHTML:
          '<i>Relentless Force <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Vi\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'special',
    spellshield: true,
    notes:
      '* The empowered attack has the same windup time as <b>Vi\'s</b> basic attacks.\n<ul><li><i>Relentless Force</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> to the primary target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to secondary targets hit by the are of effect.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Denting Blows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Denting_Blows" title="Denting Blows"><img alt="Denting Blows" src="/wiki/images/Vi_Denting_Blows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Denting_Blows" title="Vi/LoL">Denting Blows</a></span></span> will only apply a stack on <i>Relentless Force\'s</i> primary target (does not interact with the cone\'s damage).</li>\n<li>If the <i>Relentless Force</i> buff is about to run out as <b>Vi</b> starts the attack windup, the duration will be updated and extended to allow <b>Vi</b> to still sucessfully attack.</li></ul>',
  },
  'Cease and Desist': {
    name: 'Cease and Desist',
    display_name: 'Cease and Desist',
    champion: 'Vi',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ViR.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial speed, ramps up over the duration">800</span>',
    cast_time: '0.<small>25</small>',
    cost: '100 / 112.<small>5</small> / 125 / 137.<small>5</small> / 150',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL" title="Vi"><img alt="Vi" src="/wiki/images/Vi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL" title="Vi/LoL">Vi</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> the target enemy champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to them with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies she passes through and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
      'Upon reaching the target, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The dash cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Cease_and_Desist.png',
        description:
          'Active: Vi singles out the target enemy  champion and  dashes with  displacement immunity towards them, during which they are  revealed. Upon approaching within 300-units, she  dashes through and grabs them,  knocking them up for 1.3 seconds and dealing physical damage after 0.75 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vi</b> singles out the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> towards them, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>. Upon approaching within 300-units, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> through and grabs them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 1.<small>3</small> seconds and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> after 0.<small>75</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon approaching within 300-units, she  dashes through and grabs them,  knocking them up for 1.3 seconds and dealing physical damage after 0.75 seconds.',
            damagetype: 'Physical',
            values: 3,
            units: 'total_ap',
            unitsText:
              'approaching within 300-units, she  dashes through and grabs them,  knocking them up for 1.3 seconds and dealing physical damage after 0.75 seconds.',
            pre: 'Upon approaching within 300-units, she  dashes through and grabs them,  knocking them up for 1.3 seconds and dealing physical damage after 0.75 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '150 / 237.5 / 325 / 412.5 / 500 (+ 110% bonus AD)',
            valuesHTML:
              '150 / 237.<small>5</small> / 325 / 412.<small>5</small> / 500 <span style="color:orange; white-space:normal">(+&nbsp;110% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '150 / 237.5 / 325 / 412.5 / 500 (+ 110% bonus AD)',
            damagetype: 'Physical',
            values: [150, 237.5, 325, 412.5, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 237.5 / 325 / 412.5 / 500',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies she dashes through are dealt the same damage,  knocked aside by 350 units over 0.25 seconds, and  stunned for 0.75 seconds.',
        descriptionHTML:
          'Enemies she dashes through are dealt the same damage, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked aside</a></span> by 350 units over 0.<small>25</small> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>75</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies she dashes through are dealt the same damage,  knocked aside by 350 units over 0.25 seconds, and  stunned for 0.75 seconds.',
            damagetype: 'None',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'she dashes through are dealt the same damage,  knocked aside by 350 units over 0.25 seconds, and  stunned for 0.75 seconds.',
            pre: 'Enemies she dashes through are dealt the same damage,  knocked aside by 350 units over 0.25 seconds, and  stunned for 0.75 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* <b>Vi</b> will track the target if they change locations.\n<ul><li><ul><li>She will stop dashing if the target is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1500</span> units.</li></ul></li>\n<li><b>Vi</b> will land to the opposite side of the target after a delay of grabbing them.</li>\n<li>Secondary targets will be affected as soon as they come into contact with <b>Vi</b>, and cannot be affected by this again for ~4 seconds.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> debuff cannot be overridden.</li>\n<li>The dash will not end prematurely if <b>Vi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span>.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> lasts until the ability fully ends.\n<ul><li>If the dash ends from entering resurrection or the target being too far away, the displacement immunity will remain for 7 seconds, and will otherwise be lost.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>The dash speed increases with time travelled.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>\n<ul><li>If the target becomes untargetable during the dash, <b>Vi</b> ends the dash prematurely and moves towards the target briefly, ignoring any movement commands. If <b>Vi</b> enters grabbing range, she will apply the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> effect but not dealing any damage.</li>\n<li>If <b>Vi</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during the cast time, she will still dash and apply the airborne effect to the target upon entering grabbing range though not dealing any damage.</li>\n<li><i>Cease and Desist</i> will cancel and go on full cooldown if <b>Vi</b> is affected by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Fear Beyond Death 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Fear Beyond Death\'s"><img alt="Fear Beyond Death\'s" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Urgot/LoL">Fear Beyond Death\'s</a></span></span> recast during the cast time.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>The following table refers for interactions while <b>Vi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>:\n<ul><li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> cannot be used while <b>Vi</b> has grabbed the target.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Relentless Force" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Relentless_Force" title="Relentless Force"><img alt="Relentless Force" src="/wiki/images/Vi_Relentless_Force.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Relentless_Force" title="Vi/LoL">Relentless Force</a></span></span> is usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Vault Breaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vault Breaker"><img alt="Vault Breaker" src="/wiki/images/Vi_Vault_Breaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Vault_Breaker" title="Vi/LoL">Vault Breaker</a></span></span> is disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>   <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
