import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Lee Sin';

export default {
  Flurry: {
    name: 'Flurry',
    display_name: 'Flurry',
    champion: 'Lee Sin',
    skill: 'I',
    image: {
      full: 'LeeSinPassive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> After <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin"><img alt="Lee Sin" src="/wiki/images/Lee_Sin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin/LoL">Lee Sin</a></span></span> casts an ability, his next 2 basic attacks within a short time gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and restore <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Flurry.png',
        description:
          "Innate: After casting an ability, Lee Sin's next 2 basic attacks within 3 seconds gain  40% bonus attack speed and restore  energy.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Lee Sin\'s</b> next 2 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 3 seconds gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">40% <b>bonus</b> attack speed</span></span> and restore <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: "After casting an ability, Lee Sin's next 2 basic attacks within 3 seconds gain  40% bonus attack speed and restore  energy.",
            increasedStat: 'bonus_ad',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              "bonus attack speed and restore  energy.casting an ability, Lee Sin's next 2 basic attacks within 3 seconds gain  40",
            pre: "After casting an ability, Lee Sin's next 2 basic attacks within 3 seconds gain  40% bonus attack speed and restore  energy.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The first attack restores 20 / 30 / 40 (based on level) energy and the second attack restores「 half of that amount. 」「 10 / 15 / 20 (based on level) energy. 」',
        descriptionHTML:
          'The first attack restores <span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;1" data-finish="40;13" data-bot_values="20;30;40" data-top_values="1;7;13">20 / 30 / 40 (based on level)</span> energy</span> and the second attack restores<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;half of that amount.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;1" data-finish="20;13" data-bot_values="10;15;20" data-top_values="1;7;13">10 / 15 / 20 (based on level)</span> energy</span>.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The first attack restores 20 / 30 / 40 (based on level) energy and the second attack restores「 half of that amount. 」「 10 / 15 / 20 (based on level) energy. 」',
            values: [],
            basedOn: 'level',
            units: 'total_ad',
            unitsText:
              'energy and the second attack restores「 half of that amount. 」「 10 / 15 / 20',
            pre: 'The first attack restores 20 / 30 / 40',
            post: 'energy and the second attack restores「 half of that amount. 」「 10 / 15 / 20',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Flurry</i> will still restore energy even if the attacks are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or missed while <b>Lee Sin</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>, but not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>.',
  },
  'Sonic Wave': {
    name: 'Sonic Wave',
    display_name: 'Sonic Wave',
    champion: 'Lee Sin',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BlindMonkQOne.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reveal radius; does not see through terrain or brush">400</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1800',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on first cast">10 / 9 / 8 / 7 / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin"><img alt="Lee Sin" src="/wiki/images/Lee_Sin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin/LoL">Lee Sin</a></span></span> fires a sonic blast in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and marks them for a short time, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
      'While the target is marked, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Resonating Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Resonating Strike"><img alt="Resonating Strike" src="/wiki/images/Lee_Sin_Resonating_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Lee Sin/LoL">Resonating Strike</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Sonic_Wave.png',
        description:
          'Active: Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> fires a sonic blast in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and marks them for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are  revealed.',
            damagetype: 'Physical',
            values: 3,
            units: 'kindredMarks',
            unitsText:
              'Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are  revealed.',
            pre: 'Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
            valuesHTML:
              '55 / 80 / 105 / 130 / 155 <span style="color:orange; white-space:normal">(+&nbsp;110% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
            damagetype: 'Physical',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
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
          'While the target is marked, Lee Sin can cast  Resonating Strike.',
        descriptionHTML:
          'While the target is marked, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Resonating Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Resonating Strike"><img alt="Resonating Strike" src="/wiki/images/Lee_Sin_Resonating_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Lee Sin/LoL">Resonating Strike</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.',
  },
  'Resonating Strike': {
    name: 'Resonating Strike',
    display_name: 'Resonating Strike',
    champion: 'Lee Sin',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BlindMonkQOne.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1250',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ideal; bugged at different distances">1350 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span></span>',
    cast_time: 'none',
    cost: '25',
    costtype: 'Energy',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin"><img alt="Lee Sin" src="/wiki/images/Lee_Sin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin/LoL">Lee Sin</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the nearby enemy marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Sonic Wave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Sonic Wave"><img alt="Sonic Wave" src="/wiki/images/Lee_Sin_Sonic_Wave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Lee Sin/LoL">Sonic Wave</a></span></span></i>, consuming the mark upon arrival to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Resonating_Strike.png',
        description:
          "Active: Lee Sin  dashes to the nearby enemy marked by  Sonic Wave. Upon arrival, he consumes the mark and deals physical damage, increased by 0% − 100% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the nearby enemy marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Sonic Wave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Sonic Wave"><img alt="Sonic Wave" src="/wiki/images/Lee_Sin_Sonic_Wave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Lee Sin/LoL">Sonic Wave</a></span></span></i>. Upon arrival, he consumes the mark and deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#1F995C;" data-top_label="target\'s missing health" data-displayformula="1% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on target\'s <b>missing</b> health)</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
            valuesHTML:
              '55 / 80 / 105 / 130 / 155 <span style="color:orange; white-space:normal">(+&nbsp;110% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 110% bonus AD)',
            damagetype: 'Physical',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
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
        description: 'Iron Will and  Cripple can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Iron Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Iron Will"><img alt="Iron Will" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Lee Sin/LoL">Iron Will</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Cripple" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Cripple"><img alt="Cripple" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Lee Sin/LoL">Cripple</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Spell',
    spellshield: true,
    notes:
      '* <b>Lee Sin</b> will track the target if they change locations.\n<ul><li><ul><li>He will dash to the target\'s previous location without consuming the mark if the target is too far away or moves beyond 2000 units.</li></ul></li>\n<li><b>Lee Sin</b> will attempt to place himself on top of the target upon arrival.\n<ul><li>The damage dealt by <i>Resonating Strike</i> can be negated if the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span>. Sometimes, <b>Lee Sin</b> will end the dash at their last location but appear on top of the target after a short delay.</li>\n<li>Originally, <b>Lee Sin</b> would land 50 units in front of his target. Since there are no patch notes where this is noted to have changed, landing on top of his target may be a bug.</li></ul></li>\n<li><i>Resonating Strike</i> cannot be cast without the marked target nearby or if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>If <i>Resonating Strike</i> interrupts another dash, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Tempest"><img alt="Tempest" src="/wiki/images/Lee_Sin_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Lee Sin/LoL">Tempest</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Dragon\'s Rage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Dragon\'s_Rage" title="Dragon\'s Rage"><img alt="Dragon\'s Rage" src="/wiki/images/Lee_Sin_Dragon%27s_Rage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Dragon\'s_Rage" title="Lee Sin/LoL">Dragon\'s Rage</a></span></span> can be cast during it (both otherwise cannot be cast).</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><img alt="Safeguard.png" src="/wiki/images/Lee_Sin_Safeguard.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Safeguard</i>, <img alt="Iron Will.png" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Iron Will</i>, and <img alt="Cripple.png" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Cripple</i> can be cast. <img alt="Tempest.png" src="/wiki/images/Lee_Sin_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Tempest</i> and <img alt="Dragon\'s Rage.png" src="/wiki/images/Lee_Sin_Dragon%27s_Rage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Dragon\'s Rage</i> are disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ironspike Whip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip"><img alt="Ironspike Whip" src="/wiki/images/Ironspike_Whip_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip">Ironspike Whip</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Goredrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Goredrinker" title="Goredrinker"><img alt="Goredrinker" src="/wiki/images/Goredrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Goredrinker" title="Goredrinker">Goredrinker</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
  Safeguard: {
    name: 'Safeguard',
    display_name: 'Safeguard',
    champion: 'Lee Sin',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'BlindMonkWOne.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '700',
    speed:
      '1350 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'none',
    cost: '50',
    costtype: 'Energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on first cast">12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin"><img alt="Lee Sin" src="/wiki/images/Lee_Sin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin/LoL">Lee Sin</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target allied unit. If the ally is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, both they and <b>Lee Sin</b> gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for a short time upon his arrival and <i>Safeguard\'s</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;halved</span>.<br>\n<p><b>Lee Sin</b> can <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a> <i>Safeguard</i> to shield himself.\n</p>',
      'After <i>Safeguard</i> is cast, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Iron Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Iron Will"><img alt="Iron Will" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Lee Sin/LoL">Iron Will</a></span></span></i> within a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Safeguard.png',
        description:
          "Active: Lee Sin  dashes to the target allied unit's location. If the ally is a  champion upon arrival, both they and Lee Sin gain a  shield for 2 seconds and Safeguard's  cooldown is halved.\nLee Sin can self-cast Safeguard to shield himself.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target allied unit\'s location. If the ally is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> upon arrival, both they and <b>Lee Sin</b> gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds and <i>Safeguard\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is halved.<br>\n<p><b>Lee Sin</b> can <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a> <i>Safeguard</i> to shield himself.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: "If the ally is a  champion upon arrival, both they and Lee Sin gain a  shield for 2 seconds and Safeguard's  cooldown is halved.\nLee Sin can self-cast Safeguard to shield himself.",
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              "the ally is a  champion upon arrival, both they and Lee Sin gain a  shield for 2 seconds and Safeguard's  cooldown is halved.",
            pre: "If the ally is a  champion upon arrival, both they and Lee Sin gain a  shield for 2 seconds and Safeguard's  cooldown is halved.\nLee Sin can self-cast Safeguard to shield himself.",
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '50 / 100 / 150 / 200 / 250 (+ 80% AP)',
            valuesHTML:
              '50 / 100 / 150 / 200 / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '50 / 100 / 150 / 200 / 250 (+ 80% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [50, 100, 150, 200, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 100 / 150 / 200 / 250',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After Safeguard is cast, Lee Sin can cast  Iron Will within the next 3 seconds.',
        descriptionHTML:
          'After <i>Safeguard</i> is cast, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Iron Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Iron Will"><img alt="Iron Will" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Lee Sin/LoL">Iron Will</a></span></span></i> within the next 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'After Safeguard is cast, Lee Sin can cast  Iron Will within the next 3 seconds.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Safeguard is cast, Lee Sin can cast  Iron Will within the next 3 seconds.',
            pre: 'After Safeguard is cast, Lee Sin can cast  Iron Will within the next 3 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Iron Will and  Cripple can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Iron Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Iron Will"><img alt="Iron Will" src="/wiki/images/Lee_Sin_Iron_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Iron_Will" title="Lee Sin/LoL">Iron Will</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Cripple" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Cripple"><img alt="Cripple" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Lee Sin/LoL">Cripple</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: '',
    notes:
      '* <b>Lee Sin</b> cannot self-cast <i>Safeguard</i> even while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.\n<ul><li><i>Safeguard</i> can be used on any targetable allied unit excluding <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.\n<ul><li>This includes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, and <a href="/wiki/Champion_summoned_units" title="Champion summoned units">champion summoned units</a> (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-ability="Noxious Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL#Noxious_Trap" title="Noxious Trap"><img alt="Noxious Trap" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL#Noxious_Trap" title="Teemo/LoL">Noxious Trap</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Demacian Standard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Demacian Standard"><img alt="Demacian Standard" src="/wiki/images/Jarvan_IV_Demacian_Standard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Jarvan IV/LoL">Demacian Standard</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span>).</li></ul></li>\n<li>If no unit is directly targeted, <i>Safeguard</i> will search for wards in a 100 radius to target.\n<ul><li>This aids <b>Lee Sin</b> in performing the dash to a ward he just placed.</li></ul></li>\n<li><i>Safeguard</i> will not grant its <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> if the dash is interrupted.\n<ul><li>If the dash overrides or is overridden by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Resonating Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Resonating Strike"><img alt="Resonating Strike" src="/wiki/images/Lee_Sin_Resonating_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Resonating_Strike" title="Lee Sin/LoL">Resonating Strike</a></span></span>, he will grant the shield immediately rather than on arrival.</li></ul></li>\n<li>If <i>Safeguard\'s</i> dash interrupts another dash, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Tempest"><img alt="Tempest" src="/wiki/images/Lee_Sin_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Lee Sin/LoL">Tempest</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Dragon\'s Rage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Dragon\'s_Rage" title="Dragon\'s Rage"><img alt="Dragon\'s Rage" src="/wiki/images/Lee_Sin_Dragon%27s_Rage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Dragon\'s_Rage" title="Lee Sin/LoL">Dragon\'s Rage</a></span></span> can be cast during it (both otherwise cannot be cast).</li></ul>',
  },
  'Iron Will': {
    name: 'Iron Will',
    display_name: 'Iron Will',
    champion: 'Lee Sin',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'BlindMonkWOne.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '25',
    costtype: 'Energy',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin"><img alt="Lee Sin" src="/wiki/images/Lee_Sin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin/LoL">Lee Sin</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and <span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">spell vamp</a></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Iron_Will.png',
        description:
          'Active: Lee Sin gains  life steal and  spell vamp for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> gains <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and <span style="white-space:nowrap"><a href="/wiki/Spell_vamp" title="Spell vamp"><img alt="Spell vamp icon.png" src="/wiki/images/Spell_vamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">spell vamp</a></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Lee Sin gains  life steal and  spell vamp for 4 seconds.',
            increasedStat: 'spellvamp',
            values: 4,
            units: '',
            unitsText: 'Sin gains  life steal and  spell vamp for 4 seconds.',
            pre: 'Lee Sin gains  life steal and  spell vamp for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Drain:',
            values: '5 / 10.5 / 16 / 21.5 / 27%',
            valuesHTML:
              '5 / 10.<small>5</small> / 16 / 21.<small>5</small> / 27%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Drain:',
            raw: '5 / 10.5 / 16 / 21.5 / 27%',
            values: [5, 10.5, 16, 21.5, 27],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 10.5 / 16 / 21.5 / 27%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes: '* No additional details.',
  },
  Tempest: {
    name: 'Tempest',
    display_name: 'Tempest',
    champion: 'Lee Sin',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'BlindMonkEOne.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 450',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on first cast">9</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin"><img alt="Lee Sin" src="/wiki/images/Lee_Sin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin/LoL">Lee Sin</a></span></span> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, marking them for a few seconds and, if they are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> when struck, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them.',
      'If <i>Tempest</i> hits an enemy, <b>Lee Sin</b> can cast<i> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Cripple" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Cripple"><img alt="Cripple" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Lee Sin/LoL">Cripple</a></span></span></i> within a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Tempest.png',
        description:
          'Active: Lee Sin smashes the ground beneath him, dealing magic damage to nearby enemies, marking them for 4 seconds and, if they are not  invisible when struck,  revealing them for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> smashes the ground beneath him, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, marking them for 4 seconds and, if they are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> when struck, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Lee Sin smashes the ground beneath him, dealing magic damage to nearby enemies, marking them for 4 seconds and, if they are not  invisible when struck,  revealing them for the same duration.',
            damagetype: 'Magic',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'Sin smashes the ground beneath him, dealing magic damage to nearby enemies, marking them for 4 seconds and, if they are not  invisible when struck,  revealing them for the same duration.',
            pre: 'Lee Sin smashes the ground beneath him, dealing magic damage to nearby enemies, marking them for 4 seconds and, if they are not  invisible when struck,  revealing them for the same duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '35 / 65 / 95 / 125 / 155 (+ 100% AD)',
            valuesHTML:
              '35 / 65 / 95 / 125 / 155 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 65 / 95 / 125 / 155 (+ 100% AD)',
            damagetype: 'Magic',
            values: [35, 65, 95, 125, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 65 / 95 / 125 / 155',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Tempest hits an enemy, Lee Sin can cast  Cripple within the next 3 seconds after a 0.1-second delay.',
        descriptionHTML:
          'If <i>Tempest</i> hits an enemy, <b>Lee Sin</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Cripple" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Cripple"><img alt="Cripple" src="/wiki/images/Lee_Sin_Cripple.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Cripple" title="Lee Sin/LoL">Cripple</a></span></span></i> within the next 3 seconds after a 0.<small>1</small>-second delay.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Tempest hits an enemy, Lee Sin can cast  Cripple within the next 3 seconds after a 0.1-second delay.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Tempest hits an enemy, Lee Sin can cast  Cripple within the next 3 seconds after a 0.1-second delay.',
            pre: 'If Tempest hits an enemy, Lee Sin can cast  Cripple within the next 3 seconds after a 0.1-second delay.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Tempest\'s</i> sight reveal only reveals the affected targets, but visually also lights up the Fog of War in a 400 radius.\n<ul><li><i>Tempest\'s</i> sight reveal is not removed when <i>Lee Sin</i> casts <i>Cripple</i> (unlike <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Sonic Wave" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Sonic Wave\'s"><img alt="Sonic Wave\'s" src="/wiki/images/Lee_Sin_Sonic_Wave.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Sonic_Wave" title="Lee Sin/LoL">Sonic Wave\'s</a></span></span>).</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  Cripple: {
    name: 'Cripple',
    display_name: 'Cripple',
    champion: 'Lee Sin',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'BlindMonkEOne.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cast requirement">550</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effect radius when cast">600</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Wave missile speed">1600</span>',
    cast_time: 'none',
    cost: '25',
    costtype: 'energy',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin"><img alt="Lee Sin" src="/wiki/images/Lee_Sin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL" title="Lee Sin/LoL">Lee Sin</a></span></span> sends a wave to nearby enemies marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Tempest"><img alt="Tempest" src="/wiki/images/Lee_Sin_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Lee Sin/LoL">Tempest</a></span></span></i>, inflicting a decaying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> that lasts a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Cripple.png',
        description:
          'Active: Lee Sin sends a wave to nearby enemies marked by  Tempest, which  slows them for 4 seconds, decaying over the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> sends a wave to nearby enemies marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Tempest"><img alt="Tempest" src="/wiki/images/Lee_Sin_Tempest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Tempest" title="Lee Sin/LoL">Tempest</a></span></span></i>, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 4 seconds, decaying over the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Lee Sin sends a wave to nearby enemies marked by  Tempest, which  slows them for 4 seconds, decaying over the duration.',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'Sin sends a wave to nearby enemies marked by  Tempest, which  slows them for 4 seconds, decaying over the duration.',
            pre: 'Lee Sin sends a wave to nearby enemies marked by  Tempest, which  slows them for 4 seconds, decaying over the duration.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '20 / 35 / 50 / 65 / 80%',
            valuesHTML: '20 / 35 / 50 / 65 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 35 / 50 / 65 / 80%',
            values: [20, 35, 50, 65, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    spellshield: true,
    notes:
      '* <i>Tempest\'s</i> reveal is not removed when <b>Lee Sin</b> casts <i>Cripple</i>.\n<ul><li><i>Cripple</i> cannot be cast without a marked target within 550 range.</li>\n<li>The missiles <b>Lee Sin</b> sends out are nowadays missing their visual effects.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  "Dragon's Rage": {
    name: "Dragon's Rage",
    display_name: "Dragon's Rage",
    champion: 'Lee Sin',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'BlindMonkRKick.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '375',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Checks for collision every 0.25 seconds, estimated">160</span>',
    cast_time: '0.<small>25</small>',
    cooldown: '110 / 97.<small>5</small> / 85 / 72.<small>5</small> / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy champion and roundhouse kicks them, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>.',
      'Enemies that collide with the displaced enemy while it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> and take <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">primary target\'s <b>bonus</b> health</span>.',
      '<i>This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.</i>',
    ],
    description: [
      {
        icon: "/wiki/images/Dragon's_Rage.png",
        description:
          'Active: Lee Sin  roots the target enemy champion over the cast time, then roundhouse kicks them to deal physical damage and  knock them back up to 800 units over 0.8 seconds, rendering them  airborne for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lee Sin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy champion over the cast time, then roundhouse kicks them to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="see notes">up to 800 units</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">over 0.<small>8</small> seconds</span>, rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Lee Sin  roots the target enemy champion over the cast time, then roundhouse kicks them to deal physical damage and  knock them back up to 800 units over 0.8 seconds, rendering them  airborne for 1 second.',
            damagetype: 'Physical',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'Sin  roots the target enemy champion over the cast time, then roundhouse kicks them to deal physical damage and  knock them back up to 800 units over 0.8 seconds, rendering them  airborne for 1 second.',
            pre: 'Lee Sin  roots the target enemy champion over the cast time, then roundhouse kicks them to deal physical damage and  knock them back up to 800 units over 0.8 seconds, rendering them  airborne for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '175 / 287.5 / 400 / 512.5 / 625 (+ 200% bonus AD)',
            valuesHTML:
              '175 / 287.<small>5</small> / 400 / 512.<small>5</small> / 625 <span style="color:orange; white-space:normal">(+&nbsp;200% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '175 / 287.5 / 400 / 512.5 / 625 (+ 200% bonus AD)',
            damagetype: 'Physical',
            values: [175, 287.5, 400, 512.5, 625],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 287.5 / 400 / 512.5 / 625',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies that collide with the displaced enemy while it is  airborne take the same damage plus bonus physical damage and are  knocked up for 1 second.',
        descriptionHTML:
          'Enemies that collide with the displaced enemy while it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> take the same damage plus <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies that collide with the displaced enemy while it is  airborne take the same damage plus bonus physical damage and are  knocked up for 1 second.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'that collide with the displaced enemy while it is  airborne take the same damage plus bonus physical damage and are  knocked up for 1 second.',
            pre: 'Enemies that collide with the displaced enemy while it is  airborne take the same damage plus bonus physical damage and are  knocked up for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Collision Physical Damage:',
            values:
              "175 / 287.5 / 400 / 512.5 / 625 (+ 200% bonus AD) (+ 12 / 13.5 / 15 / 16.5 / 18% of primary target's bonus health)",
            valuesHTML:
              '175 / 287.<small>5</small> / 400 / 512.<small>5</small> / 625 <span style="color:orange; white-space:normal">(+&nbsp;200% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;12 / 13.<small>5</small> / 15 / 16.<small>5</small> / 18% of primary target\'s <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Collision Physical Damage:',
            raw: "175 / 287.5 / 400 / 512.5 / 625 (+ 200% bonus AD) (+ 12 / 13.5 / 15 / 16.5 / 18% of primary target's bonus health)",
            healType: 'PhysicalVamp',
            values: [175, 287.5, 400, 512.5, 625],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 287.5 / 400 / 512.5 / 625',
            children: [
              {
                values: 200,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 200% bonus AD',
              },
              {
                values: [12, 13.5, 15, 16.5, 18],
                valuesIsPercent: true,
                user: 'target',
                units: 'bonus_hp',
                unitsText: "of primary target's bonus health",
                pre: "+ 12 / 13.5 / 15 / 16.5 / 18% of primary target's bonus health",
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Special',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the primary target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to secondary targets.\n<ul><li>The <a href="/wiki/Spell_indicator" title="Spell indicator">spell indicator</a> for this ability also displays the direction for the knock back relative to <b>Lee Sin\'s</b> position.</li>\n<li>If the target of <i>Dragon Rage</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> initially on the first hit there will be no displacement of any kind.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacement\'s</a></span> direction is decided at the moment of impact and not by <b>Lee Sin</b> and his target\'s relative locations at the start of the cast (the only way for <b>Lee Sin</b> to control where his target is displaced is by using <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> before the cast time of <i>Dragon\'s Rage</i> ends).</li>\n<li>If the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> debuff is removed from the target, its ability to collide with enemies is removed aswell, even if the target has not come to a stop yet.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>The airborne debuff and with it collision of the target remains for the normal duration even if its trajectory is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displaced</a></span> by another source (i.e - <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Alistar" data-ability="Headbutt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Alistar/LoL#Headbutt" title="Headbutt"><img alt="Headbutt" src="/wiki/images/Alistar_Headbutt.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Alistar/LoL#Headbutt" title="Alistar/LoL">Headbutt</a></span></span>).</li>\n<li>The target may still collide with other enemies for the remaining airborne duration after they reach their destination, as the airborne debuff lasts longer than the displacement.</li></ul></li>\n<li>The knockback distance is intended to be 800, but due to a bug, this is reduced by up-to the sum of <b>Lee Sin\'s</b> and his target\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span>, depending on how far they are away from one another at the end of the cast time.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
