import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Kalista';

export default {
  'Martial Poise': {
    name: 'Martial Poise',
    display_name: 'Martial Poise',
    champion: 'Kalista',
    skill: 'I',
    image: {
      full: 'Kalista_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '250 / 265 / 280 (based on Boots Tier)',
    speed:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="1025;1100;1160" data-top_values="None;Basic;Finished">1025 / 1100 / 1160 (based on Boots Tier)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> During each basic attack or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL" title="Kalista"><img alt="Kalista" src="/wiki/images/Kalista_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL" title="Kalista/LoL">Kalista</a></span></span> can choose a target direction to quickly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to. The range and speed is based on the tier of <b>Kalista\'s</b> <a href="/wiki/Boots" title="Boots">Boots</a>.',
      '<span class="template_sbc"><b>Innate - Oathsworn Bond:</b></span> <b>Kalista</b> begins the game with an exclusive <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Spear" title="Black Spear"><img alt="Black Spear" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Spear" title="Black Spear">Black Spear</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Martial Poise.png',
        description:
          "Innate: Whenever Kalista inputs a movement command during her  basic attack windup or the cast time of  Pierce, she will  dash in the target direction.Kalista's dash from Martial Poise will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug).",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Kalista</b> inputs a movement command during her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Basic Attack" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Basic_Attack" title="basic attack"><img alt="basic attack" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Basic_Attack" title="Kalista/LoL">basic attack</a></span></span></i> windup or the cast time of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i>, she will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> in the target direction.<br><br><i><b>Kalista\'s</b> dash from Martial Poise will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: " Whenever Kalista inputs a movement command during her  basic attack windup or the cast time of  Pierce, she will  dash in the target direction.Kalista's dash from Martial Poise will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug).",
            values: 0,
            user: 'none',
            units: '',
            unitsText: '.',
            pre: "Whenever Kalista inputs a movement command during her  basic attack windup or the cast time of  Pierce, she will  dash in the target direction.Kalista's dash from Martial Poise will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep",
            post: '.',
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
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "The range and speed of Martial Poise are modified by the tier of Kalista's Boots. The base range when dashing from a basic attack is 250 / 265 / 280 (based on Boots Tier) units. This base distance is reduced when dashing toward the direction of her attack, to a minimum of 150 / 165 / 180 (based on Boots Tier) units.",
        descriptionHTML:
          'The range and speed of <i>Martial Poise</i> are modified by the tier of <b>Kalista\'s</b> <a href="/wiki/Boots" title="Boots">Boots</a>. The base range when dashing from a basic attack is <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="250;265;280" data-top_values="None;Basic;Finished">250 / 265 / 280 (based on Boots Tier)</span> units. This base distance is reduced when dashing toward the direction of her attack, to a minimum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="150;165;180" data-top_values="None;Basic;Finished">150 / 165 / 180 (based on Boots Tier)</span> units.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The base range when dashing from a basic attack is 250 / 265 / 280 (based on Boots Tier) units',
            values: [2, 265, 280],
            basedOn: 'Boots Tier',
            user: 'none',
            units: '',
            unitsText: 'units',
            pre: 'The base range when dashing from a basic attack is 250 / 265 / 280',
            post: 'units',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'This base distance is reduced when dashing toward the direction of her attack, to a minimum of 150 / 165 / 180 (based on Boots Tier) units.',
            values: [1, 165, 180],
            basedOn: 'Boots Tier',
            user: 'none',
            units: '',
            unitsText: 'units.',
            pre: 'This base distance is reduced when dashing toward the direction of her attack, to a minimum of 150 / 165 / 180',
            post: 'units.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "The base range when dashing from  Pierce's cast is increased「 by 50 units. 」「 to 300 / 315 / 330 (based on Boots Tier) units. 」If dashing away from the point of cast, the dash range is reduced, to a minimum of 165 / 180 / 195 (based on Boots Tier) units.",
        descriptionHTML:
          'The base range when dashing from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce\'s"><img alt="Pierce\'s" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce\'s</a></span></span></i> cast is increased<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;by 50 units.&nbsp;」</span><span class="flipText2">「&nbsp;to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="300;315;330" data-top_values="None;Basic;Finished">300 / 315 / 330 (based on Boots Tier)</span> units.&nbsp;」</span></span>If dashing <i>away</i> from the point of cast, the dash range is reduced, to a minimum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Boots Tier" data-bot_values="165;180;195" data-top_values="None;Basic;Finished">165 / 180 / 195 (based on Boots Tier)</span> units.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "The base range when dashing from  Pierce's cast is increased「 by 50 units. 」「 to 300 / 315 / 330 (based on Boots Tier) units. 」If dashing away from the point of cast, the dash range is reduced, to a minimum of 165 / 180 / 195 (based on Boots Tier) units.",
            values: [5, 315, 330],
            basedOn: 'Boots Tier',
            user: 'none',
            units: '',
            unitsText:
              'units. 」If dashing away from the point of cast, the dash range is reduced, to a minimum of 165 / 180 / 195',
            pre: "The base range when dashing from  Pierce's cast is increased「 by 50 units. 」「 to 300 / 315 / 330",
            post: 'units. 」If dashing away from the point of cast, the dash range is reduced, to a minimum of 165 / 180 / 195',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Innate - Oathsworn Bond: Kalista begins the game with an exclusive  Black Spear.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Oathsworn Bond:</b></span> <b>Kalista</b> begins the game with an exclusive <i><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Spear" title="Black Spear"><img alt="Black Spear" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Spear" title="Black Spear">Black Spear</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    notes:
      '* There is a very brief grace period in excess of the on-screen timers wherein <b>Kalista</b> can still trigger <i>Martial Poise</i>.\n<ul><li>The dash speed depends on <b>Kalista\'s</b> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> and <a href="/wiki/Item_group#Boots" title="Item group">Boots</a> Tier. Basic boots increase the dash speed by 75, and Finished boots increase it by 135.</li>\n<li>The dash speed is affected by <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Movement_speed" title="Movement speed">multiplicative movement speed modifiers</a></span></span> such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span>.\n<ul><li><span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;Additive movement speed modifiers</span></span> do not affect it.</li></ul></li>\n<li>There are a total of 24 different dash ranges based on direction with <a href="/wiki/Item_group#Boots" title="Item group">Boots</a> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span> being cast.</li>\n<li>Dash distance decreases exponentially as the dash direction becomes closer to the minimum direction (forward for basic attacks, backward for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span>.</li>\n<li><b>Kalista</b> will attempt to attack her target again at the end of the dash, allowing the player to kite with only movement commands as long as they remain in attack range.</li>\n<li>Attack move click checks for targets in brief intervals, but only while <b>Kalista</b> is not in a dash, resulting in lost DPS if it is used to automatically dash.</li>\n<li><b>Kalista\'s</b> facing direction when dashing is considered to be in the direction of the dash, not her visual facing direction.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kalista_Original_BindAllyGlobal_0.ogg   "The oath has been taken."',
  },
  Pierce: {
    name: 'Pierce',
    display_name: 'Pierce',
    champion: 'Kalista',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KalistaMysticShot.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 80',
    speed: '2400',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL" title="Kalista"><img alt="Kalista" src="/wiki/images/Kalista_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL" title="Kalista/LoL">Kalista</a></span></span> throws a spear in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
      'If <i>Pierce</i> kills the target, the spear continues onward to transfer all of the target\'s <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Rend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Rend" title="Rend"><img alt="Rend" src="/wiki/images/Kalista_Rend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Rend" title="Kalista/LoL">Rend</a></span></span></i> stacks to the next enemy it hits.',
    ],
    description: [
      {
        icon: '/wiki/images/Pierce.png',
        description:
          'Active: Kalista launches a spear in the target direction that deals physical damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> launches a spear in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '20 / 85 / 150 / 215 / 280 (+ 100% AD)',
            valuesHTML:
              '20 / 85 / 150 / 215 / 280 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 85 / 150 / 215 / 280 (+ 100% AD)',
            damagetype: 'Physical',
            values: [20, 85, 150, 215, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 85 / 150 / 215 / 280',
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
        description:
          "If Pierce kills the target, the spear continues onward to transfer all of the target's  Rend stacks to the next enemy it hits. This can repeat indefinitely until the spear reaches its maximum range.",
        descriptionHTML:
          'If <i>Pierce</i> kills the target, the spear continues onward to transfer all of the target\'s <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Rend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Rend" title="Rend"><img alt="Rend" src="/wiki/images/Kalista_Rend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Rend" title="Kalista/LoL">Rend</a></span></span></i> stacks to the next enemy it hits. This can repeat indefinitely until the spear reaches its maximum range.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
  },
  Sentinel: {
    name: 'Sentinel',
    display_name: 'Sentinel',
    champion: 'Kalista',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KalistaW.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1400 / 5000',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> 1100</span>',
    cast_time: '0.<small>5</small>',
    cooldown: '30',
    ontargetcdstatic: '10',
    recharge: '90 / 80 / 70 / 60 / 50',
    blurb: [
      '<span class="template_sbc"><b>Passive - Soul-Marked:</b></span> While <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL" title="Kalista"><img alt="Kalista" src="/wiki/images/Kalista_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL" title="Kalista/LoL">Kalista</a></span></span> and her <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Spear" title="Oathsworn"><img alt="Oathsworn" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Spear" class="mw-redirect" title="The Black Spear">Oathsworn</a></span></span> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethered</a></span>, their basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i> apply a <i>Soul-Mark</i> to their targets. If both <i>Soul-Marks</i> are applied to the same target within a few seconds, they take <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kalista</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Sentinel</i> charge, up to a cap.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> summons a <i>Sentinel</i> that patrols back and forth on a path to the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> along its trajectory as it travels.',
    ],
    description: [
      {
        icon: '/wiki/images/Sentinel 2.png',
        description:
          'Passive - Soul-Marked: While Kalista and her  Oathsworn are  tethered, their basic attacks and  Pierce apply a Soul-Mark to their targets.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive - Soul-Marked:</b></span> While <b>Kalista</b> and her <i><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Spear" title="Oathsworn"><img alt="Oathsworn" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Spear" class="mw-redirect" title="The Black Spear">Oathsworn</a></span></span></i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethered</a></span>, their basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i> apply a <i>Soul-Mark</i> to their targets.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sentinel 3.png',
        description:
          "If both Soul-Marks are applied to the same target within 4 seconds, they take bonus magic damage, capped against non-champions, and cannot be Soul-Marked again for a few seconds. Soul-Mark deals a minimum of 75 damage to  minions, executes them if they're below  125 health, and is capped against non-champions. Kalista applies the damage on-attack while the Oathsworn does so  on-hit.",
        descriptionHTML:
          'If both <i>Soul-Marks</i> are applied to the same target within 4 seconds, they take <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, capped against non-champions, and cannot be <i>Soul-Marked</i> again for a few seconds. <i>Soul-Mark</i> deals a minimum of 75 damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, executes them if they\'re below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 health</span></span>, and is capped against non-champions. <b>Kalista</b> applies the damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> while the <i>Oathsworn</i> does so <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If both Soul-Marks are applied to the same target within 4 seconds, they take bonus magic damage, capped against non-champions, and cannot be Soul-Marked again for a few seconds',
            increasedStat: 'darkHarvestStacks',
            values: 4,
            units: '',
            unitsText:
              'both Soul-Marks are applied to the same target within 4 seconds, they take bonus magic damage, capped against non-champions, and cannot be Soul-Marked again for a few seconds',
            pre: 'If both Soul-Marks are applied to the same target within 4 seconds, they take bonus magic damage, capped against non-champions, and cannot be Soul-Marked again for a few seconds',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Soul-Mark deals a minimum of 75 damage to  minions, executes them if they're below  125 health, and is capped against non-champions",
            healType: 'BonusHealth',
            values: 7,
            units: 'total_ap',
            unitsText:
              "deals a minimum of 75 damage to  minions, executes them if they're below  125 health, and is capped against non-champions",
            pre: "Soul-Mark deals a minimum of 75 damage to  minions, executes them if they're below  125 health, and is capped against non-champions",
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: "14 / 15 / 16 / 17 / 18% of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">14 / 15 / 16 / 17 / 18% of target\'s <b>maximum</b> health</span>',
          },
          {
            name: 'Maximum Non-Champion Damage:',
            values: '100 / 125 / 150 / 175 / 200',
            valuesHTML: '100 / 125 / 150 / 175 / 200',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "14 / 15 / 16 / 17 / 18% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [14, 15, 16, 17, 18],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "14 / 15 / 16 / 17 / 18% of target's maximum health",
          },
          {
            effectType: 'Damage',
            name: 'Maximum Non-Champion Damage:',
            raw: '100 / 125 / 150 / 175 / 200',
            damagetype: 'None',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
          },
        ],
      },
      {
        icon: '/wiki/images/Sentinel.png',
        description:
          'Active: Kalista summons a Sentinel that patrols back and forth on a path along the target location, granting  sight of its surroundings as it travels.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> summons a <i>Sentinel</i> that patrols back and forth on a path along the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings as it travels.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Kalista periodically stocks a Sentinel charge, up to a maximum of 2.',
        descriptionHTML:
          '<b>Kalista</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Sentinel</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Kalista periodically stocks a Sentinel charge, up to a maximum of 2.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Sentinel charge, up to a maximum of 2.',
            pre: 'Kalista periodically stocks a Sentinel charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'See Pets for more details about Sentinels.',
        descriptionHTML:
          '<i>See <a href="/wiki/Kalista/LoL#Pets" title="Kalista/LoL">Pets</a> for more details about Sentinels.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'proc',
    notes:
      '* <i>Soul-Marked\'s</i> bonus damage is credited to <b>Kalista</b> and will benefit from both her <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:turquoise; white-space:normal">magic penetration</span></span> and <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a>.\n<ul><li><ul><li>If her <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Spear" title="Oathsworn"><img alt="Oathsworn" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Spear" class="mw-redirect" title="The Black Spear">Oathsworn</a></span></span> ally scores a kill using <i>Soul-Marked\'s</i> bonus damage they will get a message stating \'Kill Secured\' in place of the usual gold pop-up (the gold itself is credited to <b>Kalista</b>).</li></ul></li>\n<li>The <i>Sentinel\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> reveal on enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> is accredited for <a href="/wiki/Assist" title="Assist">assists</a> and potentially <a href="/wiki/Kill" title="Kill">kills</a> (if they die shortly after being spotted).\n<ul><li>It does not reveal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealthed</a></span> targets.</li></ul></li>\n<li><i>Sentinel</i> will cast from wherever <b>Kalista</b> is at the end of the cast time.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Soul Mark\'s</i> interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> If <i>Pierce</i> kills the target by <i>Soul-Mark\'s</i> additional damage, it will/will not continue.</li></ul>',
  },
  Rend: {
    name: 'Rend',
    display_name: 'Rend',
    champion: 'Kalista',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KalistaExpungeWrapper.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1100',
    cast_time: '0.<small>25</small>',
    cost: '30',
    costtype: 'Mana',
    cooldown: '14 / 12.<small>5</small> / 11 / 9.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kalista\'s</b> basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i> lodge a spear into their target, applying a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Rend</i> for a few seconds.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> rips all lodged spears from nearby enemies, consuming all of their stacks to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them for a short time. Each additional spear on the target deals reduced damage.',
      'If <i>Rend</i> <a href="/wiki/Kill" title="Kill">kills</a> at least one target, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> and the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> is partially refunded.',
    ],
    description: [
      {
        description:
          "Passive: Kalista's basic attacks  on-hit and  Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kalista\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span></i> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Rend</i> to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Kalista's basic attacks  on-hit and  Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.",
            min: 0,
            max: 10,
            description:
              " Kalista's basic attacks  on-hit and  Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.",
            values: 4,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and  Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.',
            pre: "Kalista's basic attacks  on-hit and  Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Rend.png',
        description:
          'Active: Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and  slow them for 2 seconds. Each additional spear on the target deals reduced damage. Rend deals 50% reduced damage against epic  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> rips all lodged spears from nearby enemies, consuming all of their stacks to deal them <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them for 2 seconds. Each additional spear on the target deals reduced damage. <i>Rend</i> deals 50% reduced damage against epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Active:',
            raw: ' Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and  slow them for 2 seconds',
            min: 0,
            max: 10,
            description:
              ' Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and  slow them for 2 seconds',
            values: 2,
            units: 'feastStacks',
            unitsText:
              'rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and  slow them for 2 seconds',
            pre: 'Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and  slow them for 2 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Rend deals 50% reduced damage against epic  monsters.',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'reduced damage against epic  monsters.deals 50',
            pre: 'Rend deals 50% reduced damage against epic  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '20 / 30 / 40 / 50 / 60 (+ 70% AD)',
            valuesHTML:
              '20 / 30 / 40 / 50 / 60 <span style="color:orange; white-space:normal">(+&nbsp;70% AD)</span>',
          },
          {
            name: 'Slow:',
            values: '10 / 18 / 26 / 34 / 42%',
            valuesHTML: '10 / 18 / 26 / 34 / 42%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 70% AD)',
            damagetype: 'Physical',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '10 / 18 / 26 / 34 / 42%',
            values: [10, 18, 26, 34, 42],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 18 / 26 / 34 / 42%',
          },
        ],
      },
      {
        description:
          'If Rend kills at least one target, the  cooldown is reset and Kalista restores  mana.',
        descriptionHTML:
          'If <i>Rend</i> <a href="/wiki/Kill" title="Kill">kills</a> at least one target, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset and <b>Kalista</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Mana Restored:',
            values: '10 / 15 / 20 / 25 / 30',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">10 / 15 / 20 / 25 / 30</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '10 / 15 / 20 / 25 / 30',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
        ],
      },
      {
        description:
          "A nearby enemy with a Rend stack is required to cast this ability. Rend can be used during the dash of  Martial Poise and the cast time of  Pierce. In-flight spears and  Pierce if in cast will be empowered to apply Rend's effects to their targets. These empowered spears can also trigger Rend's refund.",
        descriptionHTML:
          '<i>A nearby enemy with a Rend stack is required to cast this ability. Rend can be used during the dash of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Martial Poise" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Martial_Poise" title="Martial Poise"><img alt="Martial Poise" src="/wiki/images/Kalista_Martial_Poise.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Martial_Poise" title="Kalista/LoL">Martial Poise</a></span></span> and the cast time of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span>. In-flight spears and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span> if in cast will be empowered to apply Rend\'s effects to their targets. These empowered spears can also trigger Rend\'s refund.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <i>Rend</i> at maximum stacks will deal a total of <span style="color: #FF8C34; white-space:normal">2550 / 3572 / 4847 / 6375 / 8156</span> <span style="color:orange; white-space:normal">(+&nbsp;5914.<small>3</small> / 7079.<small>618</small> / 8186.<small>493</small> / 9293.<small>368</small> / 10400.<small>243</small>% AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.\n<ul><li><i>Rend</i> cannot activate on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> enemies.</li>\n<li><i>Rend</i> applies its effects instantly on cast.</li>\n<li>The cooldown will not reset if the target is protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects.</li>\n<li>If <i>Rend</i> is used against <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL" title="Sion"><img alt="Sion" src="/wiki/images/Sion_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL" title="Sion/LoL">Sion</a></span></span> under the effects of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-ability="Glory in Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Glory in Death"><img alt="Glory in Death" src="/wiki/images/Sion_Glory_in_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Sion/LoL">Glory in Death</a></span></span>, the cooldown will reset even if it does not kill him.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>A stack is not applied if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or missed while <b>Kalista</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Pierce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Pierce" title="Pierce"><img alt="Pierce" src="/wiki/images/Kalista_Pierce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Pierce" title="Kalista/LoL">Pierce</a></span></span> does not apply a stack of <i>Rend</i> if blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li>While <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renata Glasc" data-ability="Hostile Takeover" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renata_Glasc/LoL#Hostile_Takeover" title="beserk"><img alt="beserk" src="/wiki/images/Renata_Glasc_Hostile_Takeover.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renata_Glasc/LoL#Hostile_Takeover" title="Renata Glasc/LoL">beserk</a></span></span>, <b>Kalista\'s</b> attacks will also stack <i>Rend</i> on allies.\n<ul><li><b>Kalista</b> will be unable to cast <i>Rend</i> if there are no stacks on an enemy in range.</li>\n<li><i>Rend</i> will only remove enemy spears if cast while both an ally and enemy with stacks are in range.</li></ul></li></ul>',
  },
  "Fate's Call": {
    name: "Fate's Call",
    display_name: "Fate's Call",
    champion: 'Kalista',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KalistaRx.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    tether_radius: '1100',
    cast_time: 'none',
    cost: '100',
    costtype: 'mana',
    cooldown: '150 / 120 / 90',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL" title="Kalista"><img alt="Kalista" src="/wiki/images/Kalista_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL" title="Kalista/LoL">Kalista</a></span></span> invokes her <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Spear" title="tether"><img alt="tether" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Spear" class="mw-redirect" title="The Black Spear">tether</a></span></span> to retrieve her <i>Oathsworn</i> and hold them for a few seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> them from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
      'While held, the <i>Oathsworn</i> may <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to reappear at the target location. If they collide with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, they briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> all nearby enemies.',
    ],
    description: [
      {
        icon: "/wiki/images/Fate's Call.png",
        description:
          'Active: Kalista invokes her  tether to retrieve her Oathsworn and hold them for 4 seconds,  pulling them to her over 1 second and  cleansing them from all  crowd control, as well as rendering them  invulnerable and  untargetable for the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kalista</b> invokes her <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Spear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Spear" title="tether"><img alt="tether" src="/wiki/images/Black_Spear_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Spear" class="mw-redirect" title="The Black Spear">tether</a></span></span> to retrieve her <i>Oathsworn</i> and hold them for 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pulling</a></span> them to her over 1 second and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> them from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>, as well as rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> for the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Kalista invokes her  tether to retrieve her Oathsworn and hold them for 4 seconds,  pulling them to her over 1 second and  cleansing them from all  crowd control, as well as rendering them  invulnerable and  untargetable for the duration.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'invokes her  tether to retrieve her Oathsworn and hold them for 4 seconds,  pulling them to her over 1 second and  cleansing them from all  crowd control, as well as rendering them  invulnerable and  untargetable for the duration.',
            pre: 'Kalista invokes her  tether to retrieve her Oathsworn and hold them for 4 seconds,  pulling them to her over 1 second and  cleansing them from all  crowd control, as well as rendering them  invulnerable and  untargetable for the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "While held, the Oathsworn is  vanished and may  dash with  displacement immunity to end Fate's Call's effects and reappear at the target location; after the duration, they will automatically do so at maximum range from Kalista's facing direction. The Oathsworn stops upon colliding with an enemy  champion,  knocking up all nearby enemies for a duration and landing to their  basic attack range from the target collided with.",
        descriptionHTML:
          'While held, the <i>Oathsworn</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span> and may <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to end <i>Fate\'s Call\'s</i> effects and reappear at the target location; after the duration, they will automatically do so at maximum range from <b>Kalista\'s</b> facing direction. <br>The <i>Oathsworn</i> stops upon colliding with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking</a></span> up all nearby enemies for a duration and landing to their <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;basic attack range</span> from the target collided with.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Knockup Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Knockup Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
      {
        description:
          "The Oathsworn must be nearby to cast this ability, and is also  silenced and unable to perform movement or attack commands while Fate's Call is in effect.",
        descriptionHTML:
          '<i>The Oathsworn must be nearby to cast this ability, and is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> and unable to perform movement or attack commands while Fate\'s Call is in effect.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects:
      '<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Oathsworn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Oathsworn" title="Oathsworn"><img alt="Oathsworn" src="/wiki/images/Kalista_Oathsworn.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Oathsworn" title="Kalista/LoL">Oathsworn</a></span></span> Ally / Enemies',
    spelleffects: 'False',
    spellshield: true,
    notes:
      '* The following will defer <i>Fate\'s Call\'s</i> effects at the time of cast to the end of their duration if the <i>Oathsworn</i> is:\n<ul><li><ul><li>In a <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">Channeling</a></span>.\n<ul><li><i>Fate\'s Call</i> will not defer by the following channels: <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Defiant Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Defiant_Dance" title="Defiant Dance"><img alt="Defiant Dance" src="/wiki/images/Irelia_Defiant_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Defiant_Dance" title="Irelia/LoL">Defiant Dance</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Realm Warp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Realm Warp"><img alt="Realm Warp" src="/wiki/images/Ryze_Realm_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Ryze/LoL">Realm Warp</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lucian" data-ability="The Culling" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lucian/LoL#The_Culling" title="The Culling"><img alt="The Culling" src="/wiki/images/Lucian_The_Culling.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lucian/LoL#The_Culling" title="Lucian/LoL">The Culling</a></span></span>.</li>\n<li><i>Fate\'s Call</i> cannot be cast during the following channels: <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-ability="Gate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL#Gate" title="Gate"><img alt="Gate" src="/wiki/images/Twisted_Fate_Gate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL#Gate" title="Twisted Fate/LoL">Gate</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pantheon" data-ability="Grand Starfall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pantheon/LoL#Grand_Starfall" title="Grand Starfall"><img alt="Grand Starfall" src="/wiki/images/Pantheon_Grand_Starfall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pantheon/LoL#Grand_Starfall" title="Pantheon/LoL">Grand Starfall</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Galio" data-ability="Hero\'s Entrance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galio/LoL#Hero\'s_Entrance" title="Hero\'s Entrance"><img alt="Hero\'s Entrance" src="/wiki/images/Galio_Hero%27s_Entrance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galio/LoL#Hero\'s_Entrance" title="Galio/LoL">Hero\'s Entrance</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Stand United" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Stand_United" title="Stand United"><img alt="Stand United" src="/wiki/images/Shen_Stand_United.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Stand_United" title="Shen/LoL">Stand United</a></span></span>.</li></ul></li>\n<li>Using an ability that preloads <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unstoppableforcemarker"><a href="/wiki/Crowd_control#UnstoppableForceMarker" title="Crowd control">UnstoppableForceMarker</a></span>.\n<ul><li>If the <i>Oathsworn</i> is still occupied after 6 seconds of being deferred from this time, <i>Fate\'s Call</i> will cancel.</li></ul></li></ul></li>\n<li><i>Fate\'s Call</i> will not pull the <i>Oathsworn</i> if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> but they will be retrieved after 1 second regardless.</li>\n<li><i>Fate\'s Call</i> can be cast even if the <i>Oathsworn</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><i>Fate\'s Call</i> is disabled if the <i>Oathsworn</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrecting</a></span> or is being affected by another <i>Fate\'s Call</i>.</li>\n<li><i>Fate\'s Call</i> can be used even if the <i>Oathsworn</i> is in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span>.</li>\n<li><i>Fate\'s Call</i> does not render the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span> while being held if they are creating <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Curse of the Black Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Curse of the Black Mist\'s"><img alt="Curse of the Black Mist\'s" src="/wiki/images/Senna_Curse_of_the_Black_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Senna/LoL">Curse of the Black Mist\'s</a></span></span> aura.</li>\n<li>The <i>Oathsworn</i> being held is represented by a light over <b>Kalista\'s</b> head.</li>\n<li><b>Kalista\'s</b> <a href="/wiki/Death" title="Death">death</a> does not cancel <i>Fate\'s Call</i>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kalista_Original_RAllyLowHealth_0.ogg   "They shall not have you."',
  },
} satisfies { [skillName in string]: SkillData };
