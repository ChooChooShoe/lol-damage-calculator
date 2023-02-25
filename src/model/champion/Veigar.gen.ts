import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Veigar';

export default {
  'Phenomenal Evil Power': {
    name: 'Phenomenal Evil Power',
    display_name: 'Phenomenal Evil Power',
    champion: 'Veigar',
    skill: 'I',
    image: {
      full: 'VeigarEntropy.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL" title="Veigar"><img alt="Veigar" src="/wiki/images/Veigar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL" title="Veigar/LoL">Veigar</a></span></span> generates a stack of <i>Phenomenal Evil</i> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by his abilities, and more stacks when he scores an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
      '<span class="template_sbc"><b>Phenomenal Evil:</b></span> For each stack, <b>Veigar</b> gains <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;ability power</span></span>.',
    ],
    description: [
      {
        description:
          'Innate: Veigar generates a stack of Phenomenal Evil for each enemy  champion hit by his abilities, and 5 stacks whenever he scores an enemy champion  takedown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Veigar</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Phenomenal Evil</i> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, and 5 stacks whenever he scores an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: 'Veigar generates a stack of Phenomenal Evil for each enemy  champion hit by his abilities, and 5 stacks whenever he scores an enemy champion  takedown.',
            min: 0,
            max: 10,
            description:
              'Veigar generates a stack of Phenomenal Evil for each enemy  champion hit by his abilities, and 5 stacks whenever he scores an enemy champion  takedown.',
            values: 5,
            units: 'genericStacks',
            unitsText:
              'generates a stack of Phenomenal Evil for each enemy  champion hit by his abilities, and 5 stacks whenever he scores an enemy champion  takedown.',
            pre: 'Veigar generates a stack of Phenomenal Evil for each enemy  champion hit by his abilities, and 5 stacks whenever he scores an enemy champion  takedown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Phenomenal_Evil_Power.png',
        description:
          'Phenomenal Evil: For each stack, Veigar gains  1 ability power.',
        descriptionHTML:
          '<span class="template_sbc"><b>Phenomenal Evil:</b></span> For each stack, <b>Veigar</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">1 ability power</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Phenomenal Evil:',
            raw: 'For each stack, Veigar gains  1 ability power.',
            min: 0,
            max: 10,
            description: 'For each stack, Veigar gains  1 ability power.',
            values: 1,
            units: 'genericStacks',
            unitsText: 'each stack, Veigar gains  1 ability power.',
            pre: 'For each stack, Veigar gains  1 ability power.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The two effects stack, granting 6 stacks for each enemy champion taken down by an ability, 7 with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Baleful Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Baleful_Strike" title="Baleful Strike"><img alt="Baleful Strike" src="/wiki/images/Veigar_Baleful_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Baleful_Strike" title="Veigar/LoL">Baleful Strike</a></span></span>.\n<ul><li><b>Veigar\'s</b> abilities do not have to deal damage nor affect their targets to grant a stack.</li></ul>',
  },
  'Baleful Strike': {
    name: 'Baleful Strike',
    display_name: 'Baleful Strike',
    champion: 'Veigar',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'VeigarBalefulStrike.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1050 /  990',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '2200',
    cast_time: '0.<small>25</small>',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'mana',
    cooldown: '6 / 5.<small>5</small> / 5 / 4.<small>5</small> / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL" title="Veigar"><img alt="Veigar" src="/wiki/images/Veigar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL" title="Veigar/LoL">Veigar</a></span></span> blasts a dark bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first two enemies hit.',
      'If this kills an enemy, it generates a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Phenomenal Evil Power" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Phenomenal Evil"><img alt="Phenomenal Evil" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Veigar/LoL">Phenomenal Evil</a></span></span></i>. Large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> generate more stacks.',
    ],
    description: [
      {
        icon: '/wiki/images/Baleful_Strike.png',
        description:
          'Active: Veigar blasts a dark bolt in the target direction that deals magic damage to the first two enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> blasts a dark bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first two enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 60% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If this kills an enemy, it generates 1 stack of  Phenomenal Evil, tripled against large  minions and  monsters.',
        descriptionHTML:
          'If this kills an enemy, it generates 1 stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Phenomenal Evil Power" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Phenomenal Evil"><img alt="Phenomenal Evil" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Veigar/LoL">Phenomenal Evil</a></span></span></i>, tripled against large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'If this kills an enemy, it generates 1 stack of  Phenomenal Evil, tripled against large  minions and  monsters.',
            min: 0,
            max: 10,
            description:
              'If this kills an enemy, it generates 1 stack of  Phenomenal Evil, tripled against large  minions and  monsters.',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'this kills an enemy, it generates 1 stack of  Phenomenal Evil, tripled against large  minions and  monsters.',
            pre: 'If this kills an enemy, it generates 1 stack of  Phenomenal Evil, tripled against large  minions and  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Killing two enemy champions with <i>Baleful Strike</i> grants <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="+12 from Phenomenal Evil Power and +2 from Baleful Strike"><span style="color: #7A6DFF; white-space:normal">+14 AP</span></span>.\n<ul><li><i>Baleful Strike</i> will only grant stacks of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Phenomenal Evil Power" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Phenomenal Evil"><img alt="Phenomenal Evil" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Veigar/LoL">Phenomenal Evil</a></span></span> from its bolt, and not any additional effect that would kill other units from the same cast.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  'Dark Matter': {
    name: 'Dark Matter',
    display_name: 'Dark Matter',
    champion: 'Veigar',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'VeigarDarkMatter.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '950',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 240',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'mana',
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Phenomenal_Evil_Power.png|20px|link=Veigar#Phenomenal_Evil_Power]] [[Veigar#Phenomenal_Evil_Power|Phenomenal Evil]] stacks" data-displayformula="8 * 0.9^N. \'\'N&nbsp;=&nbsp;Number of times that 50 Phenomenal Evil stacks are earned.\'\'" data-bot_values="8;7.2;6.48;5.83;5.25;4.72;4.25;3.83;3.44;3.1;2.79;2.51;2.26;2.03;1.83;1.65;1.48;1.33;1.2;...;0" data-top_values="0;50;100;150;200;250;300;350;400;450;500;550;600;650;700;750;800;850;900;...;∞">8 − 0 (based on <a href="/wiki/Veigar#Phenomenal_Evil_Power" title="Veigar#Phenomenal Evil Power"><img alt="Phenomenal Evil Power.png" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Veigar#Phenomenal_Evil_Power" title="Veigar">Phenomenal Evil</a> stacks)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL" title="Veigar"><img alt="Veigar" src="/wiki/images/Veigar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL" title="Veigar/LoL">Veigar</a></span></span> casts down a mass of dark matter that strikes the target location after a brief delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      'The cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> based on stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Phenomenal Evil Power" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Phenomenal Evil"><img alt="Phenomenal Evil" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Veigar/LoL">Phenomenal Evil</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Dark_Matter.png',
        description:
          'Active: Veigar casts down a mass of dark matter that strikes the target location after a 1.221 seconds delay, dealing magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> casts down a mass of dark matter that strikes the target location after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1.2 seconds, but rounded up to the next game tick.">1.<small>221</small> seconds</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="from the start of the cast time">delay</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Veigar casts down a mass of dark matter that strikes the target location after a 1.221 seconds delay, dealing magic damage to enemies hit.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'casts down a mass of dark matter that strikes the target location after a 1.221 seconds delay, dealing magic damage to enemies hit.',
            pre: 'Veigar casts down a mass of dark matter that strikes the target location after a 1.221 seconds delay, dealing magic damage to enemies hit.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 150 / 200 / 250 / 300 (+ 100% AP)',
            valuesHTML:
              '100 / 150 / 200 / 250 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 100% AP)',
            damagetype: 'Magic',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Dark Matter's  cooldown is reduced based on stacks of  Phenomenal Evil.",
        descriptionHTML:
          '<i>Dark Matter\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced based on stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Phenomenal Evil Power" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Phenomenal Evil"><img alt="Phenomenal Evil" src="/wiki/images/Veigar_Phenomenal_Evil_Power.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Phenomenal_Evil_Power" title="Veigar/LoL">Phenomenal Evil</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* The delay starts at the beginning of the cast time.\n<ul><li><ul><li>If <b>Veigar</b> dies during the cast time, <i>Dark Matter</i> will still successfully fall from the sky.</li></ul></li>\n<li><i>Dark Matter</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area during the delay.</li></ul>',
  },
  'Event Horizon': {
    name: 'Event Horizon',
    display_name: 'Event Horizon',
    champion: 'Veigar',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VeigarEventHorizon.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '725',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outer radius">400</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Safe zone radius">250</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Assist marker radius">390</span>',
    cast_time: '0.<small>25</small>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">20 / 18.<small>5</small> / 17 / 15.<small>5</small> / 14</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> After a brief delay, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL" title="Veigar"><img alt="Veigar" src="/wiki/images/Veigar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL" title="Veigar/LoL">Veigar</a></span></span> erects a cage at the target location that lasts for a short time. Enemies that touch the cage edges are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Event_Horizon.png',
        description:
          'Active: Veigar forms a cage at the target location that erects after a 0.5 second delay, remaining there for 3 seconds. Enemies that collide with the edges of the cage are  knocked down and  stunned for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> forms a cage at the target location that erects after a 0.<small>5</small> second delay, remaining there for 3 seconds. Enemies that collide with the edges of the cage are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Stun Duration:',
            values: '1.5 / 1.75 / 2 / 2.25 / 2.5',
            valuesHTML:
              '1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small> / 2.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1.5 / 1.75 / 2 / 2.25 / 2.5',
            values: [1.5, 1.75, 2, 2.25, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.5 / 1.75 / 2 / 2.25 / 2.5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Enemies can be affected by Event Horizon's effects only once per cast.",
        descriptionHTML:
          "Enemies can be affected by <i>Event Horizon's</i> effects only once per cast.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: true,
    notes:
      '* The stun and the knockdown are applied to units that are within a certain distance interval from the center of the area of effect.\n<ul><li>An enemy can be affected by <i>Event Horizon</i> only once every 4.<small>5</small> seconds.</li>\n<li>Units that negate the stun will still count as passing through the edges. They will become immune to the effects of <i>Event Horizon</i> for the period even after negating them.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immune</a></span> enemies will still be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>, but not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span>.</li>\n<li>At the start of the cast time, all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> in a 390-radius become marked for <b>Veigar</b> to gain an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">assist</a></span> on them should they perish within the standard 10 seconds assist time.</li>\n<li><i>Event Horizon</i> may fail to catch enemies that move very quickly through the boundary distance.\n<ul><li>More modern area checks such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL" title="Thresh\'s"><img alt="Thresh\'s" src="/wiki/images/Thresh_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL" title="Thresh/LoL">Thresh\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="The Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#The_Box" title="The Box"><img alt="The Box" src="/wiki/images/Thresh_The_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#The_Box" title="Thresh/LoL">The Box</a></span></span></span> or <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL" title="Caitlyn\'s"><img alt="Caitlyn\'s" src="/wiki/images/Caitlyn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL" title="Caitlyn/LoL">Caitlyn\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Caitlyn" data-ability="Yordle Snap Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Yordle Snap Trap"><img alt="Yordle Snap Trap" src="/wiki/images/Caitlyn_Yordle_Snap_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Caitlyn/LoL#Yordle_Snap_Trap" title="Caitlyn/LoL">Yordle Snap Trap</a></span></span></span> do not have this issue.</li></ul></li></ul>',
  },
  'Primordial Burst': {
    name: 'Primordial Burst',
    display_name: 'Primordial Burst',
    champion: 'Veigar',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'VeigarR.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '650',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '120 / 105 / 90 / 75 / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL" title="Veigar"><img alt="Veigar" src="/wiki/images/Veigar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL" title="Veigar/LoL">Veigar</a></span></span> sends a primordial burst at the target enemy champion that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Primordial_Burst.png',
        description:
          "Active: Veigar sends a primordial burst at the target enemy champion that deals magic damage, increased by 0% − 100% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Veigar</b> sends a primordial burst at the target enemy champion that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1.5% per 1% of target\'s \'\'\'missing\'\'\' health. \'\'This is capped at 66.66% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;6.67;13.33;20;26.67;33.33;40;46.67;53.33;60;66.67" data-bot_key="%" data-top_key="%">0% − 100% (based on target\'s <b>missing</b> health)</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '175 / 212.5 / 250 / 287.5 / 325 (+ 75% AP)',
            valuesHTML:
              '175 / 212.<small>5</small> / 250 / 287.<small>5</small> / 325 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '175 / 212.5 / 250 / 287.5 / 325 (+ 75% AP)',
            damagetype: 'Magic',
            values: [175, 212.5, 250, 287.5, 325],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 212.5 / 250 / 287.5 / 325',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
  },
} satisfies { [skillName in string]: SkillData };
